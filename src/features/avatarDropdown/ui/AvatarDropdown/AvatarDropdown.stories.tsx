import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { UserRole } from '@/entities/User';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    avatar,
                    id: '1',
                    roles: [UserRole.ADMIN],
                    username: 'Admin',
                },
            },
        }),
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Story />
            </div>
        ),
        RouterDecorator(),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
