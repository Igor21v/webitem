import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemLikeList } from './ItemLikeList';

export default {
    title: 'features/ItemLikeList',
    component: ItemLikeList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemLikeList>;

const Template: ComponentStory<typeof ItemLikeList> = (args) => (
    <ItemLikeList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
