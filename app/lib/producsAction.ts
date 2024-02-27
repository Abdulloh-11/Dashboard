"use server"
import { revalidatePath } from "next/cache";
import { Product, } from "./models";
import {connectToDB} from "@/app/lib/utilis";
import { redirect } from "next/navigation";
export const addProduct = async (formData: FormData) => {
    const { title, desc, price, stock, color, size, createdAt  } = Object.fromEntries(formData)
    try {
        connectToDB()
        const newProduct = new Product({
            title,desc,price,stock,color,size,createdAt
        })
        await newProduct.save()
    } catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const updateProduct = async (formData: FormData) => {
    const { id, title, desc, price,  stock, color, size, createdAt  } = Object.fromEntries(formData)
    try {
        connectToDB()
        const updatedFields = {
            id,  title, desc, price, stock, color, size, createdAt
        }
        await Product.findByIdAndUpdate(id, updatedFields)
    } catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const deleteProduct = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectToDB()
        await Product.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/products")
}