'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
    { 
        name: 'Swap',
        href: '/',
        icon: ''
    }, {
        name: 'Rewards',
        href: '/rewards',
        icon: ''
    }, {
        name: 'Sweep',
        href: '/sweep',
        icon: ''
    }, {
        name: 'Club',
        href: '/club',
        icon: ''
    }
];

export default function Links() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const linkIcon = '';

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className=""
                    >
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
}