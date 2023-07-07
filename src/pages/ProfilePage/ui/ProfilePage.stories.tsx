import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ProfilePage from './ProfilePage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_IMAGE } from '@/shared/const/tests';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator(),
        StoreDecorator({
            profile: {
                form: {
                    first: 'Asd',
                    age: 23,
                    city: 'Test',
                    country: Country.Belarus,
                    lastname: 'Flcvb',
                    currency: Currency.EUR,
                    username: 'hhh',
                    avatar: TEST_IMAGE,
                },
            },
        }),
    ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
