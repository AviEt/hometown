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
        padding: theme.spacing.unit * 3
    },
    photos: {
        display: 'flex',
        flex: 1
    },
    details: {
        display: 'flex',
        flex: 2
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

    presentItem(classes, item, rootStore) {
        if (Array.isArray(item.photos.slice())) {
            return (
                <div className={classes.item}>
                    <div className={classes.photos}>
                        <ItemPhotoCarousel
                            className={classes.photos}
                            rootStore={rootStore}
                        />
                    </div>
                    <div className={classes.details}>Hello World</div>
                </div>
            );
        } else {
            return (
                <div className={classes.item}>
                    <ItemPhoto photo={item.photos[0]} />
                    <ItemInfo item={item} />
                    <ItemOrder rootStore={rootStore} item={item} />
                </div>
            );
        }
    }
}

export const ItemPage = withStyles(styles)(ItemPageBase);
