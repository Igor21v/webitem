import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemListSmallItem } from './ItemListSmallItem';

export default {
    title: 'entities/ItemListSmallItem',
    component: ItemListSmallItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemListSmallItem>;

const Template: ComponentStory<typeof ItemListSmallItem> = (args) => (
    <ItemListSmallItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
