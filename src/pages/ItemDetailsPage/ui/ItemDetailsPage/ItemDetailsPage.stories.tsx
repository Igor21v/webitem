import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ItemDetailsPage from './ItemDetailsPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ITEM } from '@/shared/const/tests';

export default {
    title: 'pages/ItemDetailsPage/ItemDetailsPage',
    component: ItemDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator(),
        StoreDecorator({
            itemDetails: {
                data: TEST_ITEM,
            },
            user: {
                authData: { id: '1' },
            },
        }),
    ],
} as ComponentMeta<typeof ItemDetailsPage>;

const Template: ComponentStory<typeof ItemDetailsPage> = (args) => (
    <ItemDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/item-ratings?userId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
        {
            url: `${__API__}/items?_limit`,
            method: 'GET',
            status: 200,
            response: new Array(7).fill(0).map((item, index) => ({
                ...TEST_ITEM,
                id: String(index),
            })),
        },
    ],
};
