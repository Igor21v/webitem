import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { ArticleView } from '../../model/consts/ElementConst';
import { TEST_ARTICLE } from '@/shared/const/tests';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article: TEST_ARTICLE,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article: TEST_ARTICLE,
};
