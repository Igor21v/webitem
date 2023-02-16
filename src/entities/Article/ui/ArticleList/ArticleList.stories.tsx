import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { ArticleView } from '../../model/consts/ArticleConsts';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ARTICLE } from '@/shared/const/tests';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...TEST_ARTICLE,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const ListBig = Template.bind({});
ListBig.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...TEST_ARTICLE,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.BIG,
};
