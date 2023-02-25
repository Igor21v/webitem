import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemsPageFilters } from './ItemsPageFilters';

export default {
    title: 'pages/ItemsPage/ItemsPageFilters',
    component: ItemsPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ItemsPageFilters>;

const Template: ComponentStory<typeof ItemsPageFilters> = (args) => (
    <ItemsPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
