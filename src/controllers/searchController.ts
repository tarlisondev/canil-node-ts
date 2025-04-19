import { Request, Response } from "express";

import menu from "../helpers/createMenuObject";
import Pet from '../models';

export default ({
    search: (req: Request, res: Response) => {

        let query: string = req.query.q as string;
        let list = Pet.getFromName(query)

        res.render('pages/page', {
            menu: menu.create(''),
            list: list,
            query: query
        })
    }
})