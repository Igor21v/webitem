import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemAdd } from './ItemAdd';

export default {
    title: 'features/ItemAdd',
    component: ItemAdd,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemAdd>;

const Template: ComponentStory<typeof ItemAdd> = (args) => (
    <ItemAdd {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
