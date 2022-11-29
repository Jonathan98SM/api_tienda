
import mongoose from 'mongoose'


const MONGODB_URL = 'mongodb+srv://jsm:jsm1998@cluster0.sbzbxhb.mongodb.net/?retryWrites=true&w=majority'
  //'mongodb+srv://jsm:jsm1998@cluster0.sbzbxhb.mongodb.net/?retryWrites=true&w=majority'


export async function connectToDB(){
  
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("MongoDB Connected")
    } catch (error) {
        console.error(erros)
    }
}
