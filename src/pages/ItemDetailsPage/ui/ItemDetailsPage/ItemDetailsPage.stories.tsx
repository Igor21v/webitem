import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ItemDetailsPage from './ItemDetailsPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_ITEM } from '@/shared/const/tests';

export default {
    title: 'pages/ItemDetailsPage/ItemDetailsPage',
    component: ItemDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator(),
        StoreDecorator({
            itemDetails: {
                data: TEST_ITEM,
                fulfilled: true,
                isLoading: false,
            },

            user: {
                authData: { id: '1' },
            },
        }),
    ],
} as ComponentMeta<typeof ItemDetailsPage>;

const Template: ComponentStory<typeof ItemDetailsPage> = (args) => (
    <ItemDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
