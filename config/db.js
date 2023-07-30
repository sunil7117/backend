import mongoose from "mongoose"

export const db=async(URL)=>{
    console.log(URL)
    try {
        const DBOPTION={
            dbName:process.env.DBNAME
        }
    await mongoose.connect(URL,DBOPTION)
    console.log("ok")    
    } catch (error) {
        console.log(error)
    }
}