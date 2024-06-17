'use client';

import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Selection } from "@react-types/shared/src/selection";
type Props = {}


const rows = [
    {
        key: "1",
        name: "Tony Reichert",
        role: "CEO",
        status: "Active",
    },
    {
        key: "2",
        name: "Zoey Lang",
        role: "Technical Lead",
        status: "Paused",
    },
    {
        key: "3",
        name: "Jane Fisher",
        role: "Senior Developer",
        status: "Active",
    },
    {
        key: "4",
        name: "William Howard",
        role: "Community Manager",
        status: "Vacation",
    },
];

const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "role",
        label: "ROLE",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

const CartTable = (props: Props) => {
    const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set([]));
    
    const handleSelectionChange = (keys: Selection) => {
        if (keys === 'all') {
            // Select all keys
            const allKeys = new Set(rows.map(row => row.key));
            setSelectedKeys(allKeys);
        } else if (keys instanceof Set) {
            // Convert keys to Set<string> if it's not already
            const newKeys = new Set(Array.from(keys).map(String));
            setSelectedKeys(newKeys);
        }
    };

    return (
        <Table
            aria-label="Rows actions table example with dynamic content"
            selectionMode="multiple"
            selectionBehavior="toggle"
            selectedKeys={selectedKeys}
            className='max-w-[80%] my-0 mx-auto'
            onSelectionChange={handleSelectionChange}
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default CartTable;