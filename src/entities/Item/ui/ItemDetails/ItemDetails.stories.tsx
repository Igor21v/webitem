import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemDetails } from './ItemDetails';
import { TEST_ARTICLE } from '@/shared/const/tests';

export default {
    title: 'entities/ItemDetails',
    component: ItemDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetails>;

const Template: ComponentStory<typeof ItemDetails> = (args) => (
    <ItemDetails {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        itemDetails: {
            data: TEST_ARTICLE,
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
