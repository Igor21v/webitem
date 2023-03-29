import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { InputConsole } from './InputConsole';

export default {
    title: 'shared/Input',
    component: InputConsole,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputConsole>;

const Template: ComponentStory<typeof InputConsole> = (args) => (
    <InputConsole {...args} />
);

export const Light = Template.bind({});
Light.args = {
    placeholder: 'placeholder',
    value: 'value',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'placeholder',
    value: 'value',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
