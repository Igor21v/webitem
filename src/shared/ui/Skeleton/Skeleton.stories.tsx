import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    height: 200,
    width: '100%',
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
    height: 200,
    width: '100%',
};

export const DarkCircle = Template.bind({});
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];
DarkCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const Purple = Template.bind({});
Purple.decorators = [ThemeDecorator(Theme.PURPLE)];
Purple.args = {
    height: 200,
    width: '100%',
};

export const PurpleCircle = Template.bind({});
PurpleCircle.decorators = [ThemeDecorator(Theme.PURPLE)];
PurpleCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
