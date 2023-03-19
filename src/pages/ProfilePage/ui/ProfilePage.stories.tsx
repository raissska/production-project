import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
// @ts-ignore
import AvatarImg from 'shared/assets/tests/storybook.png';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...(args as object)} />;

export const Light = Template.bind({});

Light.args = {};

Light.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Raisa',
            lastname: 'Myronova',
            age: 33,
            currency: Currency.NIS,
            country: Country.Israel,
            city: 'Ashdod',
            username: 'admin',
            avatar: AvatarImg,
        },
        readonly: true,
        isLoading: false,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Raisa',
            lastname: 'Myronova',
            age: 33,
            currency: Currency.NIS,
            country: Country.Israel,
            city: 'Ashdod',
            username: 'admin',
            avatar: AvatarImg,
        },
        readonly: true,
        isLoading: false,
    },
}), ThemeDecorator(Theme.DARK)];
