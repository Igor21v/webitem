import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Preview } from './Preview';

export default {
    title: 'entities/Preview',
    component: Preview,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => (
    <Preview {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
