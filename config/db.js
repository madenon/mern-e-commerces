import mongoose from "mongoose"
import colors from "colors"

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_RUI)
        console.log(`Connexion Réussi ${conn.connection.host}`)

        
    } catch (error) {
        console.log(`Erreur de connexion ${error}`.bgRed.white)
    }
}