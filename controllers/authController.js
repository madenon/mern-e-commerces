import { hashPassword } from "../helpers/authHelpers.js"
import userModel from "../models/userModel.js"
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, role } = req.body
        if (!name) {
            return res.send({ error: "Le nom ne doit pas etre vide" })
        }
        if (!email) {
            return res.send({ error: "L'email ne doit pas etre vide" })
        }
        if (!password) {
            return res.send({ error: "Le mot de passe ne doit pas etre vide" })
        }

        if (!address) {
            return res.send({ error: "L'adresse ne doit pas etre vide" })
        }

        if (!phone) {
            return res.send({ error: "Le numéro ne doit pas etre vide" })
        }
      


        // Verification ou l'existance d un utilisateur

        const existUser = await  userModel.findOne({email})
        if(existUser){
            return res.status(200).send({
                success:true,
                message:"Utilisateur existe déjà"
            })
        }
        const hashedPassword = await hashPassword(password)

        const  user = await  new userModel({
            name,
            email,
            address,
            password:hashedPassword,
            phone
        }).save()
        res.status(200).send({
            success:true,
            message:"Utilisateur enregistré avec succès",
            user
        })

    } catch (error) {

        console.log(error)
        res.status(500).send({
            success: false,
            message: "Erreur de creation de compte",
            error
        })
    }
}


