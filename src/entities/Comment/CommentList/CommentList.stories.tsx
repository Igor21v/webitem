import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { CommentList } from './CommentList';
import { TEST_IMAGE } from '@/shared/const/tests';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya', avatar: TEST_IMAGE },
        },
        {
            id: '2',
            text: 'hi guys',
            user: { id: '2', username: 'Masha', avatar: TEST_IMAGE },
        },
    ],
};
Normal.parameters = {
    loki: { skip: true },
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
