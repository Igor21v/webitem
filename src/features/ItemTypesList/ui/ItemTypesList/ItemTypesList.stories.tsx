import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemTypesList } from './ItemTypesList';

export default {
    title: 'features/ItemTypesList',
    component: ItemTypesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemTypesList>;

const Template: ComponentStory<typeof ItemTypesList> = (args) => (
    <ItemTypesList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
