import React from 'react';
import Modal from './Modal';
import { TextContent, Text } from '@patternfly/react-core';

const LabelWithText = ({ label, text }) => {
    return (
        <TextContent>
            <Text component={'b'}>{label}</Text>
            <Text>{text}</Text>
        </TextContent>
    );
};

const RemoveModal = ({ toggle, isOpen, name, baseURL }) => {
    console.log(name, baseURL);
    const addSchema = {
        fields: [
            {
                component: 'plain-text',
                name: 'description',
                label:
                    'Removing a repository could affect your ability to update images.',
            },
            {
                component: 'plain-text',
                name: 'name',
                label: <LabelWithText label='Name' text={name} />,
            },
            {
                component: 'plain-text',
                name: 'baseURL',
                label: <LabelWithText label='baseURL' text={baseURL} />,
            },
        ],
    };

    return (
        <Modal
            title='Remove Repository'
            isOpen={isOpen}
            toggle={() => toggle({ type: 'remove' })}
            submitLabel='Remove'
            schema={addSchema}
            variant='danger'
        />
    );
};

export default RemoveModal;
