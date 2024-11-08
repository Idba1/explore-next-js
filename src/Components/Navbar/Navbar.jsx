"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();
    // console.log(pathName);
    const router = useRouter();
    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "Blog",
            path: '/blog'
        },
        {
            title: "Service",
            path: '/service'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Dashboard",
            path: '/dashboard'
        },
    ]

    const handlr = () => {
        router.push('/login');
    }

    if (pathName.includes('dashboard')) return (
        <div>
            <div className='bg-amber-200 text-black p-4'>Dashboard navbar</div>
        </div>
    )
    return (
        <div>
            <nav className="flex justify-between bg-red-900 text-white p-5">
                <h1 className='text-2xl font-bold'>Explore <span className='text-[#FFD700]'>NextJs</span></h1>
                <ul className="flex gap-5 ">
                    {/* <Link href='/' className='hidden md:block lg:blocks'>Home</Link>
                    <Link href='blog' className='hidden md:block lg:blocks'>Blog</Link>
                    <Link href='service' className='hidden md:block lg:blocks'>Service</Link>
                    <Link href='contact' className='hidden md:block lg:blocks'>Contact</Link>
                    <Link href='about' className='hidden md:block lg:blocks'>About</Link> */}

                    {
                        links.map((link) => <Link className={`${pathName == link.path && 'text-[#FFD700] font-bold'}`} key={link.path} href={link.path} >{link.title}</Link>)
                    }
                </ul>
                <button onClick={handlr} className='bg-[#FFD700] text-white px-5 py-2 rounded-sm hover:text-red-500 hover:font-bold cursor-pointer'>login</button>
            </nav>
        </div>
    );
};

export default Navbar;