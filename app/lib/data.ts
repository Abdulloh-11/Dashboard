import { Product, User } from "./models"
import {IProductPromise, IUserPromise} from "@/app/types/users";
import {connectToDB} from "@/app/lib/utilis";
export const fetchUsers = async (q: string, page: number): Promise<IUserPromise | undefined> => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2
    try {
        connectToDB()
        const count = await User.find({ username: { $regex: regex } }).countDocuments();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users }
    } catch (err) {
        console.error(err);
    }
}

export const fetchProducts = async (q: string, page: number): Promise< IProductPromise | undefined > => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2
    try {
        connectToDB()
        const count = await Product.find({ title: { $regex: regex } }).countDocuments();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, products }
    } catch (err) {
        console.error(err);
    }
}


export const fetchUser = async (id: string) => {
    try {
        connectToDB();
        const user = await User.findById(id)
        return user
    } catch (err) {
        console.log(err);
    }
}

export const fetchProduct = async (id: string) => {
    try {
        connectToDB();
        const product = await Product.findById(id)
        return product
    } catch (err) {
        console.log(err);
    }
}

