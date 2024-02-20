import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from 'next/link'
import Image from 'next/image'
import img from "@/public/user.jpg"
import Search from '@/app/ui/dashboard/search/Search'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
export default function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user...'/>
        <Link href="/dashboard/users/add"><button className={styles.addButton}>Add New</button></Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Antions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src={img} alt='user' width={50} height={50} className={styles.userImage}/>
                John Doe
              </div>
            </td>
            <td>John@gmail.com</td>
            <td>19.02.2024</td>
            <td>Admin</td>
            <td>Antions</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/1">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}
