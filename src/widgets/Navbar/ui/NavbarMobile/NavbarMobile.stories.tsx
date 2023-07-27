import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { NavbarMobile } from './NavbarMobile';
import { Theme } from '@/shared/const/theme';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widget/NavbarMobile',
    component: NavbarMobile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator(), StoreDecorator({})],
} as ComponentMeta<typeof NavbarMobile>;

const Template: ComponentStory<typeof NavbarMobile> = (args) => (
    <NavbarMobile {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [];
Dark.decorators = [ThemeDecorator(Theme.DARK)];
