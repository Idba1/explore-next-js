"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
    const pathName =usePathname();

    if (pathName.includes('dashboard')) return (
        <div>
            <div className='bg-amber-200 text-black p-4'>Dashboard Footer</div>
        </div>
    )

    return (
        <div>
            <footer className="footer footer-center bg-base-300 text-base-content p-4 w-full bg-red-900 text-center text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-[#FFD700]'>ACME Industries Ltd</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;