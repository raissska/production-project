import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
    // eslint-disable-next-line max-len
    children: 'Proident laborum mollit consequat Lorem dolor nostrud anim aute tempor aliqua veniam. Nulla cupidatat sit quis commodo pariatur quis duis mollit duis magna eu quis. Nostrud ad quis deserunt exercitation eu enim cillum aute do ut do magna dolore velit. Quis nostrud sint incididunt commodo elit aliqua eu tempor mollit labore esse. Sunt amet occaecat mollit eiusmod tempor minim occaecat proident incididunt eiusmod mollit velit et incididunt.',
};
