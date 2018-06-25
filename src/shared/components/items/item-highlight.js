import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';

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
    highlight: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit,
        flexDirection: 'row'
    },
    highlightName: {
        color: '#484848',
        fontFamily: 'cabin',
        fontSize: '18px'
    },
    highlightDescription: {
        color: '#484848',
        fontFamily: 'cabin-light',
        fontSize: '16px'
    }
});

function ItemHighlightBase({ classes, item }) {
    if (!item.highlights) {
        return null;
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>Highlights</div>
            {item.highlights.map(highlight => (
                <div key={highlight.name} className={classes.highlight}>
                    <span className={classes.highlightName}>
                        {highlight.name}{' '}
                    </span>
                    <span className={classes.highlightDescription}>
                        {highlight.description}
                    </span>
                </div>
            ))}
        </div>
    );
}

ItemHighlightBase.propTypes = {
    item: PropTypes.object.isRequired
};

export const ItemHighlight = withStyles(styles)(ItemHighlightBase);
