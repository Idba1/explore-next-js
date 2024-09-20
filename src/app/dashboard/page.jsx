import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='h-screen'>
            <h1 className='mb-10'>Dashboard</h1>
            <Link href={'/'} className='btn bg-red-500 px-5 py-3 my-7 rounded-sm'>Home</Link>
        </div>
    );
};

export default page;