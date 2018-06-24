import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { observer } from 'mobx-react/index';

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
        maxWidth: '600px',
        minWidth: '600px'
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        //transform: 'translateZ(0)'
    },
    title: {
        color: theme.palette.primary.light
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    mainPhoto: {
        maxWidth: '550px',
        minWidth: '550px',
        maxHeight: '300px',
        minHeight: '300px'
    }
});

@observer
class ItemPhotoCarouselBase extends React.Component {
    // static propTypes = {
    //     photos: PropTypes.array.isRequired,
    //     selectedPhoto: PropTypes.object
    // };

    selectPhoto = e => {
        this.props.rootStore.itemStore.selectPhoto(e.target.src);
    };

    render() {
        const {
            classes,
            rootStore: { itemStore }
        } = this.props;
        const { selectedPhoto } = itemStore;
        const photos = itemStore.getPhotos();
        return (
            <div>
                <img
                    src={selectedPhoto}
                    alt={'image title'}
                    className={classes.mainPhoto}
                />
                <GridList className={classes.gridList} cols={5.5}>
                    {photos.map(tile => (
                        <GridListTile key={tile} onClick={this.selectPhoto}>
                            <img src={tile} alt={'image title'} />

                            <GridListTileBar
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title
                                }}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export const ItemPhotoCarousel = withStyles(styles)(ItemPhotoCarouselBase);
