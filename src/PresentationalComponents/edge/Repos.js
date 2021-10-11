import React, { useState } from 'react';
import EmptyState from './Empty';
import Toolbar from './Toolbar';
import Table from './Table';
import AddModal from './modals/AddModal';
import EditModal from './modals/EditModal';
import RemoveModal from './modals/RemoveModal';

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
    const [isModalOpen, setIsModalOpen] = useState({
        add: false,
        edit: false,
        remove: false,
    });
    const [input, setInput] = useState('');
    const toggle = (type) => {
        console.log(type);
        setIsModalOpen((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };
    const filteredByName = () =>
        repos.filter((repo) =>
            repo.name.toLowerCase().includes(input.toLowerCase())
        );

    console.log(isModalOpen);
    return (
        <>
            {repos.length > 0 ? (
                <>
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
                        click: () => toggle('add'),
                    }}
                    secondaryActions={[
                        {
                            title: 'Learn more about third-party repositories',
                            link: '#',
                        },
                    ]}
                />
            )}
            <AddModal isOpen={isModalOpen.add} toggle={toggle} />
            <EditModal isOpen={isModalOpen.edit} toggle={toggle} />
            <RemoveModal isOpen={isModalOpen.remove} toggle={toggle} />
        </>
    );
};

export default Repos;
