import React from 'react';

const page = ({ params }) => {
    console.log(params);

    if (params.category.length == 4)
        return <div>{params.category[3]}</div>
    if (params.category.length == 3)
        return <div>{params.category[2]}</div>
    if (params.category.length == 2)
        return <div>{params.category[1]}</div>
    if (params.category.length == 1)
        return <div>{params.category[0]}</div>
        
    return (
        <div className='h-screen'>
            <h1>Category</h1>
        </div>
    );
};

export default page;