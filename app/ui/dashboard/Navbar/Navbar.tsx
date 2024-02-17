"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from "./Navbar.module.css"

import { 
  MdNotifications, 
  MdOutlineChair, 
  MdPublic, 
  MdSearch 
} from 'react-icons/md'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname?.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder='Search...' className={styles.input} />
        </div>
        <div className={styles.icon}>
          <MdOutlineChair size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}
