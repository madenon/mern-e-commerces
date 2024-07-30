import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import { connectDB } from "./config/db.js"

const app= express()
//config import mo
dotenv.config()
//connexion  a la base de donnee 
connectDB()

//middleware
app.use(express.json())
app.use(morgan('dev'))




const PORT = process.env.PORT||3500


app.get("/", (req, res) =>{
    res.send({message:"Hello My all friends kko"})
})

app.listen(PORT, ()=>{
    console.log(`Sever demarré  au port http://localhost:${PORT}`.bgCyan.white)
})