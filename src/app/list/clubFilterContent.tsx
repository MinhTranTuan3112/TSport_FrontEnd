'use client';
import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import React from 'react'

type Props = {
    clubs: ClubFilter[];
    searchParams: {
        page?: number;
        startPrice?: number;
        endPrice?: number;
        clubIds?: number[];
    };
}

const ClubFilterContent = ({ clubs, searchParams }: Props) => {
    return (
        <CheckboxGroup
            label='Câu lạc bộ'
            color="danger"
        >
            {clubs.map((club, index) => (
                <Checkbox value={club.id.toString()} key={index}
                    checked={searchParams.clubIds?.includes(club.id)}>{club.name}</Checkbox>
            ))}
        </CheckboxGroup>
    );
};

export default ClubFilterContent;