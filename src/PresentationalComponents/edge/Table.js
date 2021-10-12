import React from 'react';
import {
    TableComposable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@patternfly/react-table';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { Text, TextVariants } from '@patternfly/react-core';

const Table = (props) => {
    //const columns = ['Name', 'BaseURL'];
    const columns = ['Name'];
    return (
        <React.Fragment>
            <TableComposable aria-label='Simple table' variant='compact'>
                <Thead>
                    <Tr>
                        {columns.map((column, columnIndex) => (
                            <Th key={columnIndex}>{column}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {props.repos.map(({ name, baseURL }, rowIndex) => (
                        <Tr key={rowIndex}>
                            <Td key={`${rowIndex}_0`} dataLabel={columns[0]}>
                                <Text
                                    className='pf-u-mb-xs'
                                    component={TextVariants.p}
                                >
                                    {name}
                                </Text>
                                <Text component={TextVariants.a}>
                                    <a href={baseURL}>{baseURL}</a>
                                    <ExternalLinkAltIcon className='pf-u-ml-sm' />
                                </Text>
                            </Td>
                            <Td
                                actions={{
                                    items: [
                                        {
                                            title: 'Edit',
                                            onClick: () =>
                                                props.toggle({
                                                    type: 'edit',
                                                    name,
                                                    baseURL,
                                                }),
                                        },
                                        {
                                            title: 'Remove',
                                            onClick: () =>
                                                props.toggle({
                                                    type: 'remove',
                                                    name,
                                                    baseURL,
                                                }),
                                        },
                                    ],
                                }}
                            />
                        </Tr>
                    ))}
                </Tbody>
            </TableComposable>
        </React.Fragment>
    );
};

export default Table;
