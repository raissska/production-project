import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});

Light.args = {};
Light.decorators = [StoreDecorator({
    login: { username: '123', password: 'asd' },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [StoreDecorator({
    login: { username: '123', password: 'asd' },
}), ThemeDecorator(Theme.DARK)];
