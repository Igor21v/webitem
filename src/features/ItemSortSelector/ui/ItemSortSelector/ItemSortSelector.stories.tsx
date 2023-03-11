import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemSortSelector } from './ItemSortSelector';

export default {
    title: 'features/ItemSortSelector',
    component: ItemSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemSortSelector>;

const Template: ComponentStory<typeof ItemSortSelector> = (args) => (
    <ItemSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
