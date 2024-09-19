import React from 'react';

const page = ({params}) => {
    console.log(params.slug);
    return (
        <div className='h-screen'>
            <h1>Details</h1>
        </div>
    );
};

export default page;