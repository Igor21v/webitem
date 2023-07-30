import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ItemListVirtWrapp } from './ItemListVirtWrapp';
import { ItemView } from '../../model/consts/ItemConst';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ITEMS } from '@/shared/const/tests';

export default {
    title: 'entities/Item/ItemListInfinite',
    component: ItemListVirtWrapp,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ItemListVirtWrapp>;

const Template: ComponentStory<typeof ItemListVirtWrapp> = (args) => (
    <ItemListVirtWrapp {...args} />
);

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    isLoading: true,
    view: ItemView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    isLoading: true,
    view: ItemView.SMALL,
    pageWidth: 500,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    items: TEST_ITEMS,
    isLoading: false,
    view: ItemView.SMALL,
    pageWidth: 500,
};

export const ListBig = Template.bind({});
ListBig.args = {
    items: TEST_ITEMS,
    isLoading: false,
    view: ItemView.BIG,
};
