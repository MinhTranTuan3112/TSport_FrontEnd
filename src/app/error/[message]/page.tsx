import React from 'react';

const CustomErrorPage = ({ params }: { params: { message: string } }) => {
    return (
        <h1 className='text-red-600'>An error has ocurred! {params.message}</h1>
    );
};

export default CustomErrorPage;