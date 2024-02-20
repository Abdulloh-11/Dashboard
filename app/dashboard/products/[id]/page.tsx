import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'
import img from "@/public/user.png"
export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src={img} alt='user' fill/>
        </div>
        IPhome
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label >Title</label>
          <input type="text" placeholder='Title' name='title' required/>
          <label >Price</label>
          <input type="number" placeholder='price' name='price' required/>
          <label >Stock</label>
          <input type="number" placeholder='Stock' name='Stock' required/>
          <label >Color</label>
          <input type="text" placeholder='Color' name='color' required/>
          <label >Size</label>
          <textarea  name="size" rows={10} placeholder='Size'></textarea>
          <label >Cat</label>
          <select name="cat" id="cat">
              <option value="kitchen">Kitchen</option>
              <option value="computers">Computers</option>
          </select>
          <label >Description</label>
          <textarea name="desc" id="desc" rows={10} placeholder='Description'></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
