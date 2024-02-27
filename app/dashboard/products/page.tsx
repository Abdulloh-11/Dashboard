import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css"
import Image from 'next/image'
import Face_User from "../../../public/user.jpg"
import img from "@/public/user.jpg"
import { fetchProducts } from '@/app/lib/data'
import { IProductPromise } from '@/app/types/users'
import {deleteProduct} from "@/app/lib/producsAction";

import Pagination from '@/app/ui/dashboard/panigation/panigation'


  export default async function Products({ searchParams }: { searchParams: { query: string, page: string } }) {
  const q = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1
  const results: IProductPromise | undefined  = await fetchProducts(q, page)
  console.log(results, "results");
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
        {
          results?.products?.map(product => (
              <tr key={product._id}>
                <td>
                  <div className={styles.product}>
                    <Image src={ Face_User} alt='user'  width={40} height={40} className={styles.productImage} />
                    {product.title}
                  </div>
                </td>
                <td>{product?.desc}</td>
                <td>{product?.price}</td>
                <td>{product?.createdAt?.toString()?.slice(4, 16) || "24.02.2024" }</td>
                <td>{product?.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="text" hidden name='id' value={product._id} />
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
          ))
        }
        </tbody>
      </table>
      <Pagination count={results?.count} />
    </div>
  )
}
