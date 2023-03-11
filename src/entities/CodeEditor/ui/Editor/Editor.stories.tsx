import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Editor } from './Editor';

export default {
    title: 'entities/Editor',
    component: Editor,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
