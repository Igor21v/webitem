import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CodeEditor } from './CodeEditor';

export default {
    title: 'entities/CodeEditor',
    component: CodeEditor,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = (args) => (
    <CodeEditor {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
