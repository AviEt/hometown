import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { ItemBrief } from 'shared/components';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 4,
        display: 'flex',
        flexDirection: 'column'
    },
    name: {
        fontSize: 18,
        color: theme.palette.primary[500]
    },
    price: {
        marginTop: theme.spacing.unit * 2
    },
    header: {
        display: 'flex',
        fontFamily: 'cabin',
        color: '#484848',
        fontSize: '32px'
    },
    city: {
        fontFamily: 'cabin',
        color: '#484848',
        fontSize: '16px'
    }
});

function ItemInfoBase({ classes, item }) {
    return (
        <div className={classes.root}>
            <div className={classes.header}>{item.name}</div>
            <div className={classes.city}>{item.city}</div>
            <ItemBrief item={item} />
        </div>
    );
}

ItemInfoBase.propTypes = {
    item: PropTypes.object.isRequired
};

export const ItemInfo = withStyles(styles)(ItemInfoBase);
