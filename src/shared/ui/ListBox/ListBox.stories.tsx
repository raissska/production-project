import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        {
            value: 'itme1',
            content: 'item1',
        },
        {
            value: 'itme2',
            content: 'item2',
        },
        {
            value: 'itme3',
            content: 'item3',
        },
    ],
    value: 'itme2',

};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        {
            value: 'itme1',
            content: 'item1',
        },
        {
            value: 'itme2',
            content: 'item2',
        },
        {
            value: 'itme3',
            content: 'item3',
        },
    ],
    value: 'itme2',
    direction: 'topLeft',

};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        {
            value: 'itme1',
            content: 'item1',
        },
        {
            value: 'itme2',
            content: 'item2',
        },
        {
            value: 'itme3',
            content: 'item3',
        },
    ],
    value: 'itme2',
    direction: 'topRight',

};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        {
            value: 'itme1',
            content: 'item1',
        },
        {
            value: 'itme2',
            content: 'item2',
        },
        {
            value: 'itme3',
            content: 'item3',
        },
    ],
    value: 'itme2',
    direction: 'bottomLeft',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        {
            value: 'itme1',
            content: 'item1',
        },
        {
            value: 'itme2',
            content: 'item2',
        },
        {
            value: 'itme3',
            content: 'item3',
        },
    ],
    value: 'itme2',
    direction: 'bottomRight',
};
