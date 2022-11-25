import {Router} from "express";
import gamesController from "../controllers/gamesController";

class GamesRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }
    private config() {
        this.router.get('/',gamesController.list);

    }
}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;

