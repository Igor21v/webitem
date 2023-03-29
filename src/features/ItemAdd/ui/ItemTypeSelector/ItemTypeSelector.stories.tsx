import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemTypeSelector } from './ItemTypeSelector';

export default {
    title: 'features/ItemTypeSelector',
    component: ItemTypeSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemTypeSelector>;

const Template: ComponentStory<typeof ItemTypeSelector> = (args) => (
    <ItemTypeSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
