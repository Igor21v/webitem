import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemListMobileItem } from './ItemListMobileItem';

export default {
    title: 'entities/ItemListBigItem',
    component: ItemListMobileItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemListMobileItem>;

const Template: ComponentStory<typeof ItemListMobileItem> = (args) => (
    <ItemListMobileItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
