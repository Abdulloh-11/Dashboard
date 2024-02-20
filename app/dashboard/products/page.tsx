import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css"
import Image from 'next/image'
import img from "@/public/user.jpg"
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Serach for a product...' />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src={img} alt='user' width={40} height={40} className={styles.productImage} />
                IPhone
              </div>
            </td>
            <td>Desc</td>
            <td>$1200</td>
            <td>20.02.2024</td>
            <td>33</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/1">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
