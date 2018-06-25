import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import { ProfileCard } from 'shared/components';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit
    },
    title: {
        color: '#767676',
        fontFamily: 'cabin',
        fontSize: '20px',
        marginBottom: theme.spacing.unit
    },
    roommatesContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing.unit,
        alignItems: 'stretch'
    },
    profile: {
        flex: 1,
        margin: theme.spacing.unit
    }
});

function ItemRoommatesBase({ classes, item }) {
    if (!item.roommates) {
        return null;
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>Roommates</div>
            <div className={classes.roommatesContainer}>
                {item.roommates.map(roommate => (
                    <div className={classes.profile}>
                        <ProfileCard key={roommate.name} profile={roommate} />
                    </div>
                ))}
            </div>
        </div>
    );
}

ItemRoommatesBase.propTypes = {
    item: PropTypes.object.isRequired
};

export const ItemRoommates = withStyles(styles)(ItemRoommatesBase);
