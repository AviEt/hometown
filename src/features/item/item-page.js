import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import {
    BackButton,
    BusyIndicator,
    HeaderLayout,
    ItemInfo,
    ItemOrder,
    ItemPhoto,
    ScrollingContent,
    ItemPhotoCarousel
} from 'shared/components';

const styles = theme => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing.unit * 2
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    },
    title: {
        color: theme.palette.primary.light
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    }

    //imgFullWidth
});

@inject('rootStore')
@observer
class ItemPageBase extends React.Component {
    render() {
        const { classes, rootStore } = this.props;
        const { isLoading, selectedItem: item } = rootStore.itemStore;

        return (
            <HeaderLayout NavButton={BackButton}>
                <ScrollingContent>
                    {isLoading ? (
                        <BusyIndicator />
                    ) : (
                        this.presentItem(classes, item, rootStore)
                    )}
                </ScrollingContent>
            </HeaderLayout>
        );
    }

    fetchFixedImage(src) {
        return (
            'https://res.cloudinary.com/hometown2/image/fetch/w_250,h_285,c_fit,e_sharpen/' +
            src
        );
        //return src;
    }

    presentItem(classes, item, rootStore) {
        if (item.morePhotos) {
            return (
                <ItemPhotoCarousel
                    className={classes.root}
                    rootStore={rootStore}
                />
            );
        } else {
            return (
                <div className={classes.item}>
                    <ItemPhoto photo={item.photo} />
                    <ItemInfo item={item} />
                    <ItemOrder rootStore={rootStore} item={item} />
                </div>
            );
        }
    }
}

export const ItemPage = withStyles(styles)(ItemPageBase);
