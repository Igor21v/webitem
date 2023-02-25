import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { TEST_ARTICLE } from '@/shared/const/tests';
import ItemsPage from './ItemsPage';

export default {
    title: 'pages/ItemsPage/ItemsPage',
    component: ItemsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator(), StoreDecorator({})],
} as ComponentMeta<typeof ItemsPage>;

const Template: ComponentStory<typeof ItemsPage> = (args) => (
    <ItemsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/items?_expand=user&_limit&_page&_sort=createdAt&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: new Array(9).fill(0).map((item, index) => ({
                ...TEST_ARTICLE,
                id: String(index),
            })),
        },
    ],
};
