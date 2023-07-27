import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TEST_ITEM } from '@/shared/const/tests';
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
Normal.args = {
    item: TEST_ITEM,
    handleUpdateItem: () => () => null,
    langTabs: [
        {
            content: 'HTML',
            value: 'html',
        },
        {
            content: 'CSS',
            value: 'css',
        },
        {
            content: 'JS',
            value: 'js',
        },
    ],
};
Normal.parameters = {
    loki: { skip: true },
};
