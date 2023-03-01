import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ItemListItem } from './ItemListItem';
import { ItemView } from '../../model/consts/ItemConst';
import { TEST_ITEM } from '@/shared/const/tests';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'entities/Item/ItemListItem',
    component: ItemListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ItemListItem>;

const Template: ComponentStory<typeof ItemListItem> = (args) => (
    <ItemListItem {...args} />
);

export const Big = Template.bind({});
Big.args = {
    view: ItemView.BIG,
    item: TEST_ITEM,
};

export const Small = Template.bind({});
Small.args = {
    view: ItemView.SMALL,
    item: TEST_ITEM,
};
