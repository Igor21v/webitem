import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from '@/shared/assets/tests/avatar.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: AvatarImg,
};

export const Large = Template.bind({});
Large.args = {
    src: AvatarImg,
    size: 150,
};
