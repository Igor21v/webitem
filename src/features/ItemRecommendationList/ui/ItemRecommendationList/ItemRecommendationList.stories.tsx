import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemRecommendationList } from './ItemRecommendationList';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ITEM } from '@/shared/const/tests';

export default {
    title: 'features/ItemRecommendationList',
    component: ItemRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ItemRecommendationList>;

const Template: ComponentStory<typeof ItemRecommendationList> = (args) => (
    <ItemRecommendationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/items?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...TEST_ITEM, id: '1' },
                { ...TEST_ITEM, id: '2' },
                { ...TEST_ITEM, id: '3' },
            ],
        },
    ],
};
