import bcrypt from "bcrypt"

export const hashPassword = async (pasword) => {
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(pasword, saltRound)
        return hashedPassword
    } catch (error) {
        console.log(error)

    }
}

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)

}