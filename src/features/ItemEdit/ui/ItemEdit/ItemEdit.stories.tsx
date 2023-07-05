import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemEdit } from './ItemEdit';

export default {
    title: 'features/ItemEdit',
    component: ItemEdit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ItemEdit>;

const Template: ComponentStory<typeof ItemEdit> = (args) => (
    <ItemEdit {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
