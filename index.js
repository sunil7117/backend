import express  from "express"
import dotenv from "dotenv"
import { db } from "./config/db.js"
import { router } from "./routes/newsRouter.js"
import { defaultData } from "./default.js"
dotenv.config()
const app=express()
const PORT=8080

// construction of routes rule
// router name related to route
// app.use(routeName)

app.use(router)
app.listen(PORT, ()=>{
    db(process.env.DB_URL)
    defaultData()
    console.log(`server stated on http://localhost:${PORT}`)
})

