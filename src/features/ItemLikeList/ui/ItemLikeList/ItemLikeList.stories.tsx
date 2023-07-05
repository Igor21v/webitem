import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TEST_ITEMS } from '@/shared/const/tests';
import { ItemLikeListFetch } from './ItemLikeListFetch';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'features/ItemLikeList',
    component: ItemLikeListFetch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemLikeListFetch>;

const Template: ComponentStory<typeof ItemLikeListFetch> = (args) => (
    <ItemLikeListFetch {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    likeItems: '1',
};
Normal.decorators = [RouterDecorator(), StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/itemsLike?itemsReq=1`,
            method: 'GET',
            status: 200,
            response: TEST_ITEMS,
        },
    ],
};
