import React from 'react'
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css"
import Image from 'next/image'
import img from "@/public/user.jpg"
export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={img} alt='user' fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label >Username</label>
          <input type="text" name='username' placeholder='username' />
          <label >Email</label>
          <input type="email" name='email' placeholder='email' />
          <label >Password</label>
          <input type="password" name='password' placeholder='password' />
          <label >Phone</label>
          <input type="text" name='phone' placeholder='phone' />
          <label >Address</label>
          <input type="text" name='address' placeholder='address' />
          <label >Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label >Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
