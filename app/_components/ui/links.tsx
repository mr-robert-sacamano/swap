'use client';

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
    return (
        <>
            {links.map((link) => {
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