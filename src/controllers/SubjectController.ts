import { Request, Response } from "express";

export class SubjectController {
    async create(req: Request, res: Response) {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({
                message: "O nome é obrigatório"
            })
        }
    }
}