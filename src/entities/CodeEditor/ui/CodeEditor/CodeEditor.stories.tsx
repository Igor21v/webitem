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
Normal.args = {
    codes: {
        html: '',
        css: 'CSS codes',
        js: 'JS codes',
    },
    langTabs: [
        { value: 'html', content: 'HTML' },
        { value: 'css', content: 'CSS' },
        { value: 'js', content: 'JS' },
    ],
};
