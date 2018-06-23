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
    ScrollingContent
} from 'shared/components';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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

    presentImages(classes, morePhotos) {
        return (
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {morePhotos.map(tile => (
                        <GridListTile key={tile}>
                            <img src={tile} alt={'image title'} />
                            <GridListTileBar
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title
                                }}
                                // actionIcon={
                                //     <IconButton>
                                //         <StarBorderIcon className={classes.title} />
                                //     </IconButton>
                                // }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }

    presentItem(classes, item, rootStore) {
        if (item.morePhotos) {
            return this.presentImages(classes, item.morePhotos);
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
