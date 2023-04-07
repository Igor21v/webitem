import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemEdit } from './ItemEdit';

export default {
    title: 'features/ItemAdd',
    component: ItemEdit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemEdit>;

const Template: ComponentStory<typeof ItemEdit> = (args) => (
    <ItemEdit {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
