import type {Request, Response} from "express";
import prismaClient from "../db/database"

export const fetchAllUsersFromDB = async () => {
   const users = await prismaClient.user.findMany()

   return users
}

export const getAllUsers = async (req:Request, res:Response) => {
    try {
        const users = await fetchAllUsersFromDB()

        res.status(200).json(users)
    }catch (e) {
        res.status(500).json(e)
    }
}

export const createUser = async (req:Request, res:Response) => {
    try {

        const user = await prismaClient.user.create({
            data: req.body
        })

        res.status(200).json(user)
    }catch (e) {
        res.status(500).json(e)
    }
}
