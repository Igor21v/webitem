import { ComponentStory, ComponentMeta } from '@storybook/react';
import ItemEditPage from './ItemEditPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { TEST_ITEM } from '@/shared/const/tests';

export default {
    title: 'pages/ItemEditPage',
    component: ItemEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator('/items/2/edit')],
} as ComponentMeta<typeof ItemEditPage>;

const Template: ComponentStory<typeof ItemEditPage> = () => <ItemEditPage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/items/2`,
            method: 'GET',
            status: 200,
            response: TEST_ITEM,
        },
    ],
};
