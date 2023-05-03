import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemTypeUI } from './ItemTypeUI';

export default {
    title: 'entities/ItemType',
    component: ItemTypeUI,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemTypeUI>;

const Template: ComponentStory<typeof ItemTypeUI> = (args) => (
    <ItemTypeUI {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
