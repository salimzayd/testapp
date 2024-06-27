import express from "express"
const app = express()
const port = 3002
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import userrouter from "./Userroute.js"

const mongodb = process.env.MONGO_DB
main().catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(mongodb);
    console.log("db connected");

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(express.json())
    app.use(cors())

    app.use('/api',userrouter)
    
    app.listen(port,() =>{
        console.log("server is listening in port ",port);
    })
}