import React from 'react';
import Modal from './Modal';

const AddModal = ({ toggle, isOpen }) => {
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
                label: 'Custom Packages from my company',
            },
            {
                component: 'plain-text',
                name: 'base-url',
                label: 'https://omaciel.fedorapeople.org/animals',
            },
        ],
    };

    return (
        <Modal
            title='Remove Repository'
            isOpen={isOpen}
            toggle={() => toggle('remove')}
            submitLabel='Remove'
            schema={addSchema}
        />
    );
};

export default AddModal;
