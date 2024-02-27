import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'
import img from "@/public/user.png"
import { fetchProduct } from '@/app/lib/data'
import {updateProduct} from "@/app/lib/producsAction";

export default async function SingleProductPage({ params }: { params: { id: string } }) {
    const id = params?.id
    const product = await fetchProduct(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src={img} alt='user' fill/>
        </div>
          {product?.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label >Title</label>
          <input type="text" placeholder='Title' name={product?.title} required/>
          <label >Price</label>
          <input type="number" placeholder='Price' name={product?.price} required/>
          <label >Stock</label>
          <input type="number" placeholder='Stock' name={product?.stock} required/>
          <label >Color</label>
          <input type="text" placeholder='Color' name={product?.color} required/>
          <label >Size</label>
          <textarea  name="size" rows={10} placeholder={product?.size}></textarea>
          <label >Cat</label>
          <select name="cat" id="cat">
              <option value="kitchen">Kitchen</option>
              <option value="computers">Computers</option>
          </select>
          <label >Description</label>
          <textarea name="desc" id="desc" rows={10} placeholder={product?.desc}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
