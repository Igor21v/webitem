import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemTypeCard } from './ItemTypeCard';

export default {
    title: 'entities/Item/ItemTypeCard',
    component: ItemTypeCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemTypeCard>;

const Template: ComponentStory<typeof ItemTypeCard> = (args) => (
    <ItemTypeCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
