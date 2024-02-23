import { User } from "./models"
import { connectToDB } from "./utilis"
export const fetchUsers = async(q:string)=>{
    const regex = new RegExp(q, "i");
    try {
        connectToDB()
        const users = await User.find({username: {$regex: regex}})
        return users
    }catch (error){
        console.log(error)
    }
};
