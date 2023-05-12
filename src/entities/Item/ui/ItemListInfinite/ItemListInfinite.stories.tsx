import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ItemListInfinite } from './ItemListInfinite';
import { ItemView } from '../../model/consts/ItemConst';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ITEM } from '@/shared/const/tests';

export default {
    title: 'entities/Item/ItemList',
    component: ItemListInfinite,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ItemListInfinite>;

const Template: ComponentStory<typeof ItemListInfinite> = (args) => (
    <ItemListInfinite {...args} />
);

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    items: [],
    isLoading: true,
    view: ItemView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    items: [],
    isLoading: true,
    view: ItemView.SMALL,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    items: new Array(9).fill(0).map((item, index) => ({
        ...TEST_ITEM,
        id: String(index),
    })),
    isLoading: false,
    view: ItemView.SMALL,
};

export const ListBig = Template.bind({});
ListBig.args = {
    items: new Array(9).fill(0).map((item, index) => ({
        ...TEST_ITEM,
        id: String(index),
    })),
    isLoading: false,
    view: ItemView.BIG,
};
