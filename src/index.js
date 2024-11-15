// require('dotenv').config() Instead do this;
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({path: './env'})


//First Approach
//MAke a separate folder as "db" 
connectDB()

/*
Second Approach 
import express from "express"
const app = express()

;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error: ", error)
            throw error
        })


        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error){
        console.error("ERROR: ", error)
        throw error
    }



})()
*/
