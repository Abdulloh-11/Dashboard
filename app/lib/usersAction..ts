"use server"
import { revalidatePath } from "next/cache";
import { User } from "./models";
import {connectToDB} from "@/app/lib/utilis";
import { redirect } from "next/navigation";

export const addUser = async (formData: FormData) => {
    const { username, password, phone, email, addUser, isAdmin, isActive } = Object.fromEntries(formData)
    try {
        connectToDB()
        const newUser = new User({
            username, password, phone, email, addUser, isAdmin, isActive
        })
        await newUser.save()

    } catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const updateUser = async (formData: FormData) => {
    const { id,username,  password, phone, email, addUser, isAdmin, isActive } = Object.fromEntries(formData)
    try {
        connectToDB()
        const updatedFields = {
            id, username, password, phone, email, addUser, isAdmin, isActive
        }
        await User.findByIdAndUpdate(id, updatedFields)
    } catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const deleteUser = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectToDB()
        await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/users")
}

