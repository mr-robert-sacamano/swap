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
        href: '/',
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
    return (
        <>
            {links.map((link) => {
							const pathname = usePathname();
							const LinkIcon = link.icon;

                return (
										<div
											key={`${link.name}`} 
											className={`${pathname === link.href ? 'border-b-2 border-b-[#fec4ef] bg-[#333333] px-3 flex space-between gap-2 items-center cursor-pointer' : 'px-3 flex space-between gap-2 items-center cursor-pointer'}`}>
											<LinkIcon
												className={`${pathname === link.href ? 'active-link h-5 w-5' : 'h-5 w-5'}`} />
											<Link
													href={link.href}
													className={`${pathname === link.href ? 'active-link' : ''}`}
											>
													{link.name}
											</Link>
										</div>
                );
            })}
        </>
    );
}