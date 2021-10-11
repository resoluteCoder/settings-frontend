import React from 'react';
import {
    Toolbar,
    Pagination,
    ToolbarItem,
    ToolbarContent,
    Button,
    InputGroup,
    TextInput,
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

const RepoToolbar = ({ openModal, setInput }) => {
    return (
        <Toolbar id='toolbar'>
            <ToolbarContent>
                <ToolbarItem>
                    <InputGroup>
                        <TextInput
                            name='textInput1'
                            id='textInput1'
                            type='search'
                            aria-label='search input example'
                            placeholder='Filter by name'
                            onChange={(value) => setInput(value)}
                        />
                        <Button
                            variant='control'
                            aria-label='search button for search input'
                        >
                            <SearchIcon />
                        </Button>
                    </InputGroup>
                </ToolbarItem>
                <ToolbarItem>
                    <Button onClick={openModal} variant='primary'>
                        Add Repository
                    </Button>
                </ToolbarItem>

                <ToolbarItem
                    variant='pagination'
                    align={{ default: 'alignRight' }}
                >
                    <Pagination
                        itemCount={37}
                        //perPage={this.state.perPage}
                        //page={this.state.page}
                        //onSetPage={this.onSetPage}
                        //widgetId='pagination-options-menu-top'
                        //onPerPageSelect={this.onPerPageSelect}
                    />
                </ToolbarItem>
            </ToolbarContent>
        </Toolbar>
    );
};

export default RepoToolbar;
