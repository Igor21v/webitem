import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemLike } from './ItemLike';

export default {
    title: 'entities/ItemLike',
    component: ItemLike,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemLike>;

const Template: ComponentStory<typeof ItemLike> = (args) => (
    <ItemLike {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
