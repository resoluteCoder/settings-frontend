import React, { useState } from 'react';
import EmptyState from './Empty';
import Toolbar from './Toolbar';
import Table from './Table';
import AddModal from './modals/AddModal';
import EditModal from './modals/EditModal';
import RemoveModal from './modals/RemoveModal';
import Header from './Header';

const Repos = () => {
    //const repos = [];
    const data = [
        {
            name: 'Friendly 3rd Part Repo Name',
            baseURL:
                'https://cdn/redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.4./os',
        },
        {
            name: 'something',
            baseURL:
                'https://cdn/redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.4./os',
        },
    ];

    const [repos, setRepos] = useState(data);
    const [modalDetails, setModalDetails] = useState({
        isOpen: {
            add: false,
            edit: false,
            remove: false,
        },
        name: '',
        baseURL: '',
    });
    const [input, setInput] = useState('');
    const toggle = ({ type, name = '', baseURL = '' }) => {
        console.log(type);
        setModalDetails((prevState) => ({
            ...prevState,
            name,
            baseURL,
            isOpen: {
                ...prevState.isOpen,
                [type]: !prevState.isOpen[type],
            },
        }));
    };
    const filteredByName = () =>
        repos.filter((repo) =>
            repo.name.toLowerCase().includes(input.toLowerCase())
        );

    console.log(modalDetails);
    return (
        <>
            {repos.length > 0 ? (
                <>
                    <Header />
                    <Toolbar openModal={toggle} setInput={setInput} />
                    <Table toggle={toggle} repos={filteredByName()} />
                </>
            ) : (
                <EmptyState
                    icon='repository'
                    title='Add a third-party repository'
                    body='Add third-party repositories to build RHEL for Edge images with additional packages.'
                    primaryAction={{
                        text: 'Add Repository',
                        click: () => toggle({ type: 'add' }),
                    }}
                    secondaryActions={[
                        {
                            title: 'Learn more about third-party repositories',
                            link: '#',
                        },
                    ]}
                />
            )}
            <AddModal isOpen={modalDetails.isOpen.add} toggle={toggle} />
            <EditModal
                isOpen={modalDetails.isOpen.edit}
                name={modalDetails.name}
                baseURL={modalDetails.baseURL}
                toggle={toggle}
            />
            <RemoveModal
                isOpen={modalDetails.isOpen.remove}
                name={modalDetails.name}
                baseURL={modalDetails.baseURL}
                toggle={toggle}
            />
        </>
    );
};

export default Repos;
