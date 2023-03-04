import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OptionAnimate } from './OptionAnimate';

export default {
    title: 'shared/AnimateHover',
    component: OptionAnimate,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OptionAnimate>;

const Template: ComponentStory<typeof OptionAnimate> = (args) => (
    <OptionAnimate {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
