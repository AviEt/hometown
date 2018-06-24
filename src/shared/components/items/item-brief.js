import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import PersonIcon from '@material-ui/icons/Person';

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
    }
});

function ItemBriefBase({ classes, item }) {
    return (
        <div className={classes.root}>
            <div className={classes.briefDetails}>
                <PersonIcon />
                {item.roommates} roommates
            </div>
            <div className={classes.briefDetails}>
                <PersonIcon />
                {item.roommates} roommates
            </div>
            <div className={classes.briefDetails}>
                <PersonIcon />
                {item.roommates} roommates
            </div>
        </div>
    );
}

ItemBriefBase.propTypes = {
    item: PropTypes.object.isRequired
};

export const ItemBrief = withStyles(styles)(ItemBriefBase);
