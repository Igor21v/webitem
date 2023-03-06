import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ItemsLikePage from './ItemsLikePage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'pages/FavouritesPage',
    component: ItemsLikePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator(), StoreDecorator({})],
} as ComponentMeta<typeof ItemsLikePage>;

const Template: ComponentStory<typeof ItemsLikePage> = () => <ItemsLikePage />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
