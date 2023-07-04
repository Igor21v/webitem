import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { TextSpan } from './TextSpan';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/TextSpan',
    component: TextSpan,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TextSpan>;

const Template: ComponentStory<typeof TextSpan> = (args) => (
    <TextSpan {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    text: 'Text lorem ipsun',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    text: 'Text lorem ipsun',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    text: 'Text lorem ipsun',
    theme: 'error',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    text: 'Text lorem ipsun',
    theme: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    text: 'Text lorem ipsun',
    size: 'size_l',
};

export const SizeM = Template.bind({});
SizeM.args = {
    text: 'Text lorem ipsun',
    size: 'size_m',
};

export const SizeS = Template.bind({});
SizeS.args = {
    text: 'Text lorem ipsun',
    size: 'size_s',
};
