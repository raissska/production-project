import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
// @ts-ignore
import AvatarImg from '../../../../shared/assets/tests/storybook.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Raisa',
        lastname: 'Myronova',
        age: 33,
        currency: Currency.NIS,
        country: Country.Israel,
        city: 'Ashdod',
        username: 'admin',
        avatar: AvatarImg,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Orange = Template.bind({});
Orange.args = {
    data: {
        first: 'Raisa',
        lastname: 'Myronova',
        age: 33,
        currency: Currency.NIS,
        country: Country.Israel,
        city: 'Ashdod',
        username: 'admin',
        avatar: AvatarImg,
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
