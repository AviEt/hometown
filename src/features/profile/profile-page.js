import React from 'react';
import Typography from '@material-ui/core/Typography';
import { inject } from 'mobx-react';
import { HeaderLayout, ScrollingContent } from 'shared/components';
import { ProfileCard } from 'shared/components';

@inject('rootStore')
export class ProfilePage extends React.Component {
    render() {
        const {
            rootStore: { authStore }
        } = this.props;
        const {
            user: { email }
        } = authStore;

        const profile = {
            name: 'Avi Etzioni',
            avatar:
                'https://scontent.ftlv2-1.fna.fbcdn.net/v/t31.0-8/25542336_10156035104193336_5168887463173703747_o.jpg?_nc_cat=0&oh=39f00dc9bcede1107035a1db7c355f6e&oe=5BAA2AAA',
            cover:
                'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/18268677_10155349070432853_4734958941778630218_n.jpg?_nc_cat=0&oh=3e71b2bbd31e4ddd7ce86106583e8f70&oe=5BB65107',
            joined: 'May 06 2017',
            description:
                "Avi loves a clean house, especially when he's not the one cleaning. Same goes for good" +
                ' food. '
        };

        return (
            <HeaderLayout>
                <ScrollingContent>
                    <ProfileCard profile={profile} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
