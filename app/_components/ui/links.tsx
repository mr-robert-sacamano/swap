'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	ArrowsRightLeftIcon,
	GiftIcon,
	UserGroupIcon
} from '@heroicons/react/24/outline';

const links = [
    { 
        name: 'Swap',
        href: '/swap',
        icon: ArrowsRightLeftIcon
    }, {
        name: 'Rewards',
        href: '/rewards',
        icon: GiftIcon
    }, {
        name: 'Sweep',
        href: '/sweep',
        icon: ArrowsRightLeftIcon
    }, {
        name: 'Club',
        href: '/club',
        icon: UserGroupIcon
    }
];

export default function Links() {
	const pathname = usePathname();

    return (
        <>
            {
                links.map((link) => {
                const LinkIcon = link.icon;

                return (
                    <div
                        key={`${link.name}`} 
                        className={`${pathname === link.href ? 'link-item-wrapper link-item-wrapper-active' : 'link-item-wrapper'}`}>
                        <LinkIcon
                            className={`${pathname === link.href ? 'link-icon link-icon-active' : 'link-icon'}`} />
                        <Link
                                href={link.href}
                                className={`${pathname === link.href ? 'link link-active' : 'link'}`}
                        >
                                {link.name}
                        </Link>
                    </div>
                );
            })}
        </>
    );
}