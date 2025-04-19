import { Request, Response } from "express";
import menu from "../helpers/createMenuObject";
import Pet from '../models';

export default ({
    page: (req: Request, res: Response) => {

        let list = Pet.getAll();

        res.render('pages/page', {
            menu: menu.create('all'),
            banner: {
                title: 'Todos os Animais',
                background: 'allanimals.jpg'
            },
            list: list
        })
    },
    dogs: (req: Request, res: Response) => {

        let list = Pet.getFromType('dog');

        res.render('pages/page', {
            menu: menu.create('dog'),
            banner: {
                title: 'Todos os Dogs',
                background: 'banner_dog.jpg'
            },
            list: list
        })

    },
    cats: (req: Request, res: Response) => {

        let list = Pet.getFromType('cat')

        res.render('pages/page', {
            menu: menu.create('cat'),
            banner: {
                title: 'Todos os Cats',
                background: 'banner_cat.jpg'
            },
            list: list
        })

    },
    fishes: (req: Request, res: Response) => {

        let list = Pet.getFromType('fish')

        res.render('pages/page', {
            menu: menu.create('fish'),
            banner: {
                title: 'Todos os Fishes',
                background: 'banner_fish.jpg'
            },
            list: list
        })

    }
})