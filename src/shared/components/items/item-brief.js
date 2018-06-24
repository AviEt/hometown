import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import PersonIcon from '@material-ui/icons/Person';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import PetIcon from '@material-ui/icons/Pets';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'row'
    },
    briefDetails: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing.unit * 2
    },
    icon: {
        marginRight: '5px'
    }
});

function renderIcon(classes, icon, text) {
    return (
        <div className={classes.briefDetails}>
            {icon} {text}
        </div>
    );
}

function renderRoomates(classes, roomatesCount) {
    if (!roomatesCount) {
        roomatesCount = 0;
    }
    return renderIcon(
        classes,
        <PersonIcon className={classes.icon} />,
        roomatesCount + ' roomates'
    );
}

function renderSmoking(classes, item) {
    if (item.smoking) {
        return renderIcon(
            classes,
            <SmokingRoomsIcon className={classes.icon} />,
            'Smoking allowed'
        );
    } else {
        return renderIcon(
            classes,
            <SmokeFreeIcon className={classes.icon} />,
            'Smoking prohibited'
        );
    }
}

function renderPets(classes, item) {
    if (item.pets) {
        return renderIcon(
            classes,
            <PetIcon className={classes.icon} />,
            'Pets allowed'
        );
    }
}

function ItemBriefBase({ classes, item }) {
    return (
        <div className={classes.root}>
            {renderRoomates(classes, item.roommates)}
            {renderSmoking(classes, item)}
            {renderPets(classes, item)}
        </div>
    );
}

ItemBriefBase.propTypes = {
    item: PropTypes.object.isRequired
};

export const ItemBrief = withStyles(styles)(ItemBriefBase);
