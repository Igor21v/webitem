import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ItemsLikePage from './ItemsLikePage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { LOCAL_STORAGE_ITEMS_LIKE } from '@/shared/const/localstorage';
import { TEST_ITEMS } from '@/shared/const/tests';

export default {
    title: 'pages/FavouritesPage',
    component: ItemsLikePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator(), StoreDecorator({})],
} as ComponentMeta<typeof ItemsLikePage>;

const Template: ComponentStory<typeof ItemsLikePage> = () => <ItemsLikePage />;

export const NonEmpty = Template.bind({});
NonEmpty.args = {};
NonEmpty.decorators = [
    (Story) => {
        localStorage.setItem(
            LOCAL_STORAGE_ITEMS_LIKE,
            JSON.stringify({ 1111: '' }),
        );
        return <Story />;
    },
];
NonEmpty.parameters = {
    mockData: [
        {
            url: `${__API__}/itemsLike?itemsReq=%7B%221111%22%3A%22%22%7D`,
            method: 'GET',
            status: 200,
            response: TEST_ITEMS,
        },
    ],
};

export const Empty = Template.bind({});
localStorage.setItem(LOCAL_STORAGE_ITEMS_LIKE, JSON.stringify({}));
Empty.args = {};
Empty.decorators = [
    (Story) => {
        localStorage.setItem(LOCAL_STORAGE_ITEMS_LIKE, JSON.stringify({}));
        return <Story />;
    },
];
