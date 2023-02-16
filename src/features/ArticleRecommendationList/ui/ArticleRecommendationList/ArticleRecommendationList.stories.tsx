import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleRecommendationList } from './ArticleRecommendationList';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ARTICLE } from '@/shared/const/tests';

export default {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => (
    <ArticleRecommendationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...TEST_ARTICLE, id: '1' },
                { ...TEST_ARTICLE, id: '2' },
                { ...TEST_ARTICLE, id: '3' },
            ],
        },
    ],
};