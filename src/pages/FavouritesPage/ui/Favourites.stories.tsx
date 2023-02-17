import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import FavouritesPage from './Favourites';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'pages/FavouritesPage',
    component: FavouritesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator(), StoreDecorator({})],
} as ComponentMeta<typeof FavouritesPage>;

const Template: ComponentStory<typeof FavouritesPage> = () => (
    <FavouritesPage />
);

export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
