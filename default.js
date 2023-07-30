import { data } from "./constent/data.js"
import { newsModel } from "./model/newsModel.js"

export const defaultData=async()=>{
    try {
        // await newsModel.deleteMany()
        await newsModel.insertMany(data)
        console.log("data inserted...")   
    } catch (error) {
        console.log(error)
    }
}