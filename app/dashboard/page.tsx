import React from 'react'
import styles from "../ui/dashboard/Dashboard.module.css"
import Card from '../ui/dashboard/card/Card'
import RightBar from '../ui/dashboard/rightBar/RightBar'
import Transactions from '../ui/dashboard/transactions/Transactions'
import Chart from '../ui/dashboard/chart/Chart'
export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  )
}
