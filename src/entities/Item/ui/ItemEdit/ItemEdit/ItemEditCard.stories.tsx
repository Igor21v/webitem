import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemEditCard } from './ItemEditCard';

export default {
    title: 'entities/ItemEdit',
    component: ItemEditCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemEditCard>;

const Template: ComponentStory<typeof ItemEditCard> = (args) => (
    <ItemEditCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
