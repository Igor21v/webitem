import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HoverImage } from './HoverImage';

export default {
    title: 'shared/AnimateHover',
    component: HoverImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HoverImage>;

const Template: ComponentStory<typeof HoverImage> = (args) => (
    <HoverImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
