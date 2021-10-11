import React from 'react';
import Modal from './Modal';

const EditModal = ({ toggle, isOpen }) => {
    const editSchema = {
        fields: [
            {
                component: 'plain-text',
                name: 'title',
                label: 'Update information about this third-party repository.',
            },
            {
                component: 'text-field',
                name: 'repo-name',
                label: 'Name',
                placeholder: 'Repository name',
                helperText:
                    'Can only contain letters, numbers, spaces, hypthon ( - ), and underscores( _ ).',
                isRequired: true,
            },
            {
                component: 'textarea',
                name: 'base-url',
                label: 'BaseURL',
                placeholder: 'https://',
                helperText:
                    'If you change the repo URL, you may not have access to the packages that were used to build images that reference this repository.',
                isRequired: true,
            },
        ],
    };

    return (
        <Modal
            title='Edit Repository'
            isOpen={isOpen}
            toggle={() => toggle('edit')}
            submitLabel='Update'
            schema={editSchema}
        />
    );
};

export default EditModal;
