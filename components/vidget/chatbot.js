import React, { Component } from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';

const FAQAssistant = () => (
  <ChatBot
    steps={[
        {
        id: '1',
        message: 'What number I am thinking?',
        trigger: '2',
        },
        {
        id: '2',
        options: [
                { value: 1, label: 'About this site', trigger: '3' },
                { value: 2, label: 'Problem with accout', trigger: '4' },
                { value: 3, label: 'Donate project', trigger: '5' },
                { value: 4, label: 'Ask Admin', trigger: '6' },
            ],
        },
        {
            id: '3',
            message: 'This site made for sharing knowledge',
            trigger: '2',
        },
        {
            id: '4',
            message: 'Your request was accepted for handling, your last account activity will be verified',
            trigger: '2'
        },
        {
            id: '5',
            message: 'You can send donate to \n +7-771-888-67-67!',
            trigger: '2'
        },
        {
            id: '6',
            message: 'Now write your question',
            trigger: '7'
        },
        {
            id: '7',
            user: true,
            trigger: '8',
        },
        {
            id: '8',
            message: '{previousValue} your question will be delivered to Admin)',

            trigger: '2',
        },
    ]}

    floating={true}
  />
);

export default FAQAssistant;
