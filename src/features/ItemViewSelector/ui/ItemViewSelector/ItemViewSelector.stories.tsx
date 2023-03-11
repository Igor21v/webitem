import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemViewSelector } from './ItemViewSelector';

export default {
    title: 'features/ItemViewSelector',
    component: ItemViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemViewSelector>;

const Template: ComponentStory<typeof ItemViewSelector> = (args) => (
    <ItemViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
