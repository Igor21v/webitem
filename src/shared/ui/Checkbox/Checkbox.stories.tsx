import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
    title: 'shared/Checkbox',
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
