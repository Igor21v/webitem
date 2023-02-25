import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ItemDetailsPageHeader } from './ItemDetailsPageHeader';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'pages/ItemDetailsPage/ItemDetailsPageHeader',
    component: ItemDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetailsPageHeader>;

const Template: ComponentStory<typeof ItemDetailsPageHeader> = (args) => (
    <ItemDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.decorators = [
    RouterDecorator(),
    StoreDecorator({
        itemDetails: {
            data: {},
        },
    }),
];
