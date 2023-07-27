import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ItemRating from './ItemRating';

export default {
    title: 'features/ItemRating',
    component: ItemRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemRating>;

const Template: ComponentStory<typeof ItemRating> = (args) => (
    <ItemRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    itemId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/itemRatings?userId=1&itemId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    itemId: '1',
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/itemRatings?userId=1&itemId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
