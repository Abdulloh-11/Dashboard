"use client"
import React, { ReactNode } from 'react'
import styles from "./MenuLink.module.css"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
interface SubMenuItem {
    title: string,
    path: string,
    icon: ReactNode;
}

export default function MenuLink({ menu }: Readonly<{
    menu: SubMenuItem
}>) {
    const pathname = usePathname()
    return (
        <Link href={menu.path} className={`${styles.container} ${pathname === menu.path && styles.active}  `}>{menu.icon} {menu.title}</Link>
    )
}
