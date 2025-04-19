import { Router } from "express";
import pageController from "../controllers/pageController";
import searchController from "../controllers/searchController";

const route = Router();

route.get('/', pageController.page)
route.get('/dogs', pageController.dogs)
route.get('/cats', pageController.cats)
route.get('/fishes', pageController.fishes)

route.get('/search', searchController.search)

export default route;