import Link from 'next/link';
import React from 'react';

const Services = () => {
    return (
        <div className='gap-5'>
            <Link href='/service/web'>Web Development</Link>
            <br />
            <Link href='/service/marketing'>Marketing</Link>
        </div>
    );
};

export default Services;