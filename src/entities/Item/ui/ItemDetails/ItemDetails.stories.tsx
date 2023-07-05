import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemDetailsWrapper } from './ItemDetailsWrapper';
import { TEST_ITEM } from '@/shared/const/tests';

export default {
    title: 'entities/item/ItemDetails',
    component: ItemDetailsWrapper,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetailsWrapper>;

const Template: ComponentStory<typeof ItemDetailsWrapper> = (args) => (
    <ItemDetailsWrapper {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        itemDetails: {
            data: TEST_ITEM,
            isLoading: false,
            fulfilled: true,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        itemDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        itemDetails: {
            error: 'error',
        },
    }),
];
