import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        maxWidth: 400
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    actions: {
        display: 'flex'
    },
    bigAvatar: {
        width: 60,
        height: 60
    }
});

class ProfileCardBase extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes, profile } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label={profile.name}
                                className={classes.bigAvatar}
                                src={profile.avatar}
                            />
                        }
                        title={profile.name}
                        subheader={profile.joined}
                    />
                    <CardMedia
                        className={classes.media}
                        image={profile.cover}
                        title="Cover photo"
                    />
                    <CardContent>
                        <Typography component="p">
                            {profile.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

ProfileCardBase.propTypes = {
    classes: PropTypes.object.isRequired
};

export const ProfileCard = withStyles(styles)(ProfileCardBase);
