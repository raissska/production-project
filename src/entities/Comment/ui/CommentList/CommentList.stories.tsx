import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';
// @ts-ignore
import AvatarImg from '../../../../shared/assets/tests/storybook.png';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            // eslint-disable-next-line max-len
            text: 'Tempor cillum aliquip amet sit. Officia consectetur ullamco magna nisi sit aliquip. Tempor aute aliquip Lorem excepteur sunt incididunt do exercitation eiusmod adipisicing.',
            user: {
                id: '1',
                username: 'admin',
                avatar: AvatarImg,
            },
        },
        {
            id: '2',
            text: 'some comment 2',
            user: {
                id: '1',
                username: 'user',
                avatar: AvatarImg,
            },
        },
    ],

};
