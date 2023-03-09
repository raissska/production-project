import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Title',
    // eslint-disable-next-line max-len
    text: 'Fugiat consequat magna fugiat aute adipisicing.Mollit cillum duis laborum ex. Nostrud est quis elit commodo. Cupidatat quis sit sunt aliquip.',
};

export const Error = Template.bind({});

Error.args = {
    title: 'Title',
    // eslint-disable-next-line max-len
    text: 'Fugiat consequat magna fugiat aute adipisicing.Mollit cillum duis laborum ex. Nostrud est quis elit commodo. Cupidatat quis sit sunt aliquip.',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});

OnlyText.args = {
    // eslint-disable-next-line max-len
    text: 'Fugiat consequat magna fugiat aute adipisicing.Mollit cillum duis laborum ex. Nostrud est quis elit commodo. Cupidatat quis sit sunt aliquip.',
};

export const TextThemeDark = Template.bind({});
TextThemeDark.args = {
    title: 'Title',
    // eslint-disable-next-line max-len
    text: 'Fugiat consequat magna fugiat aute adipisicing.Mollit cillum duis laborum ex. Nostrud est quis elit commodo. Cupidatat quis sit sunt aliquip.',
};
TextThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
