import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ItemsPage from './ItemsPage';
import { TEST_ITEMS } from '@/shared/const/tests';

export default {
    title: 'pages/ItemsPage/ItemPage',
    component: ItemsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator('/items/animation'),
        StoreDecorator({
            itemsPage: {
                _inited: false,
            },
        }),
    ],
} as ComponentMeta<typeof ItemsPage>;

const Template: ComponentStory<typeof ItemsPage> = (args) => (
    <ItemsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/items/?_limit=20&_page=1&_sort=createdAt&_order=desc&q=&type=animation`,
            method: 'GET',
            status: 200,
            response: TEST_ITEMS,
        },
    ],
};
