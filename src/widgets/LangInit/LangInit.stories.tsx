import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LangInit } from './LangInit';

export default {
    title: 'widgets/LangInit',
    component: LangInit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangInit>;

const Template: ComponentStory<typeof LangInit> = (args) => (
    <LangInit {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
