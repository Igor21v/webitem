import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemAdd } from './ItemAdd';

export default {
    title: 'features/ItemAdd',
    component: ItemAdd,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ItemAdd>;

const Template: ComponentStory<typeof ItemAdd> = () => <ItemAdd />;

export const Normal = Template.bind({});
Normal.args = {};
