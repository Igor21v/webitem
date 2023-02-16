import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ARTICLE } from '@/shared/const/tests';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator(),
        StoreDecorator({
            articleDetails: {
                data: TEST_ARTICLE,
            },
            user: {
                authData: { id: '1' },
            },
        }),
    ],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    <ArticleDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
        {
            url: `${__API__}/articles?_limit`,
            method: 'GET',
            status: 200,
            response: new Array(7).fill(0).map((item, index) => ({
                ...TEST_ARTICLE,
                id: String(index),
            })),
        },
    ],
};
