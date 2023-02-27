import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnimateHover } from './AnimateHover';

export default {
    title: 'shared/AnimateHover',
    component: AnimateHover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AnimateHover>;

const Template: ComponentStory<typeof AnimateHover> = (args) => (
    <AnimateHover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
