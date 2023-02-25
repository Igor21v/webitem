import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemDetailsComments } from './ItemDetailsComments';

export default {
    title: 'pages/ItemDetailsPage/ItemDetailsComments',
    component: ItemDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetailsComments>;

const Template: ComponentStory<typeof ItemDetailsComments> = (args) => (
    <ItemDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [StoreDecorator({})];
