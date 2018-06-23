import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
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

class ItemPhotoCarouselBase extends React.Component {
    // static propTypes = {
    //     photos: PropTypes.array.isRequired,
    //     selectedPhoto: PropTypes.object
    // };

    render() {
        const {
            classes,
            rootStore: { itemStore }
        } = this.props;
        const { selectedItem } = itemStore;
        const photos = selectedItem.morePhotos;
        const selectedPhoto = itemStore.selectedPhoto
            ? itemStore.selectedPhoto
            : selectedItem.photo;

        return (
            <div>
                <img src={selectedPhoto} alt={'image title'} />
                <GridList className={classes.gridList} cols={2.5}>
                    {photos.map(tile => (
                        <GridListTile key={tile}>
                            <img src={tile} alt={'image title'} />
                            <GridListTileBar
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title
                                }}
                                onClick={itemStore.selectPhoto(tile)}
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
}

export const ItemPhotoCarousel = withStyles(styles)(ItemPhotoCarouselBase);
