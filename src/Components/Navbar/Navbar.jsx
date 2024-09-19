import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between bg-red-900 text-white p-5">
                <h1 className='text-2xl font-bold'>Explore NextJs</h1>
                <ul className="flex gap-5 ">
                    <Link href='/' className='hidden md:block lg:blocks'>Home</Link>
                    <Link href='blog' className='hidden md:block lg:blocks'>Blog</Link>
                    <Link href='service' className='hidden md:block lg:blocks'>Service</Link>
                    <Link href='contact' className='hidden md:block lg:blocks'>Contact</Link>
                    <Link href='about' className='hidden md:block lg:blocks'>About</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;