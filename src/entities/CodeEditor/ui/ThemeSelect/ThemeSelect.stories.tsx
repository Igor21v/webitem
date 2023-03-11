import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeSelect } from './ThemeSelect';

export default {
    title: 'entities/ThemeSelect',
    component: ThemeSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSelect>;

const Template: ComponentStory<typeof ThemeSelect> = (args) => (
    <ThemeSelect {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
