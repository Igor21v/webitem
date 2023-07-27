import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageLoader } from './PageLoader';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widget/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
    <PageLoader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
