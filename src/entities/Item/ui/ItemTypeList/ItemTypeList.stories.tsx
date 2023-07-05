import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { ItemTypeList } from './ItemTypeList';

export default {
    title: 'entities/Item/ItemTypeList',
    component: ItemTypeList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ItemTypeList>;

const Template: ComponentStory<typeof ItemTypeList> = (args) => (
    <ItemTypeList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
