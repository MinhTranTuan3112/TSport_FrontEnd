'use client';
import { Select, SelectItem } from '@nextui-org/react';
import React from 'react'

type Props = {}

const filterOptions = [
    'Bán chạy nhất',
    'Giá từ cao đến thấp',
    'Giá từ thấp đến cao',
];

const SortSelect = (props: Props) => {
    return (
        <Select
            label="Sắp xếp theo"
            className="max-w-xs"
        >
            {filterOptions.map((option, index) => (
                <SelectItem key={index}>
                    {option}
                </SelectItem>
            ))}
        </Select>
    );
};

export default SortSelect;