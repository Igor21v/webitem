import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { TEST_ARTICLE } from '@/shared/const/tests';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator(), StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit&_page&_sort=createdAt&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: new Array(9).fill(0).map((item, index) => ({
                ...TEST_ARTICLE,
                id: String(index),
            })),
        },
    ],
};
