import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { CommentCard } from './CommentCard';
import { TEST_IMAGE } from '@/shared/const/tests';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya', avatar: TEST_IMAGE },
    },
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
