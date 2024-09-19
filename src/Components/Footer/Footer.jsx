import React from 'react';

const Footer = () => {
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