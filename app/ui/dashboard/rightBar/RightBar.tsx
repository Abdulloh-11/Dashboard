import React from 'react'
import styles from "./rigthBar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import astronaut from "../../../../public/pngwing.com.png"
export default function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src={astronaut} alt='astronaut' fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available New</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={styles.subtitle}>Texts 4 minutes to lean</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <button className={styles.button}> <MdPlayCircleFilled/> Watch</button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available partial pre-rendiring is coming up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit!
          </p>
          <button className={styles.button}> <MdReadMore/> Learn</button>
        </div>
      </div>
    </div>
  )
}
