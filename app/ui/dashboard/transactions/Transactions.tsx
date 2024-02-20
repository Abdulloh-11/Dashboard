import React from 'react'
import styles from "./transactions.module.css"
import Image from 'next/image'
import img from "../../../../public/user.jpg"
export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amuunt</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src={img} alt='image' width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`} >Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$13.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src={img} alt='' width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$13.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src={img} alt='' width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$13.200</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}
