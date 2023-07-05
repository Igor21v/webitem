import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    data: {
        first: 'Asd',
        age: 23,
        city: 'Test',
        country: Country.Belarus,
        lastname: 'Flcvb',
        currency: Currency.EUR,
        username: 'hhh',
        avatar,
    },
};

export const WhithError = Template.bind({});
WhithError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
