import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ItemList } from './ItemList';
import { ItemView } from '../../model/consts/ItemConst';
import { TEST_ITEM } from '@/shared/const/tests';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'entities/Item/ItemList',
    component: ItemList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ItemList>;

const Template: ComponentStory<typeof ItemList> = (args) => (
    <ItemList {...args} />
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
