import { Request, Response } from "express";

export default ({
    page: (req: Request, res: Response) => {
        res.send('Home no controller')
    },
    dogs: (req: Request, res: Response) => {

    },
    cats: (req: Request, res: Response) => {

    },
    fishes: (req: Request, res: Response) => {

    }
})