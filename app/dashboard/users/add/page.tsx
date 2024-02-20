import React from 'react'
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"
export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
          <input type="text" placeholder='username' name='username' required/>
          <input type="email" placeholder='Email' name='email' required/>
          <input type="passsword" placeholder='password' name='password' required/>
          <input type="phone" placeholder='phone' name='phone' required/>
          <select name="isAdmin" id="isAdmin">
            <option value={false}>is Admin</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>is Active</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <textarea name="address" id="address"  rows="10" placeholder='Address'></textarea>
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
