import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemListBigItem } from './ItemListBigItem';

export default {
    title: 'entities/ItemListBigItem',
    component: ItemListBigItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemListBigItem>;

const Template: ComponentStory<typeof ItemListBigItem> = (args) => (
    <ItemListBigItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
