import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemCoverImg } from './ItemCoverImg';

export default {
    title: 'entities/ItemCoverImg',
    component: ItemCoverImg,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemCoverImg>;

const Template: ComponentStory<typeof ItemCoverImg> = (args) => (
    <ItemCoverImg {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
