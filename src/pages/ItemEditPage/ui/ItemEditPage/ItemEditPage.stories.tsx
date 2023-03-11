import { ComponentStory, ComponentMeta } from '@storybook/react';
import ItemEditPage from './ItemEditPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'pages/ItemEditPage',
    component: ItemEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator('/items/2/edit')],
} as ComponentMeta<typeof ItemEditPage>;

const Template: ComponentStory<typeof ItemEditPage> = (args) => (
    <ItemEditPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
