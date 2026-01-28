import { Router } from "express";
import * as pagesController from "../controllers/pagesController.js";

const router = Router();

router.get("/", pagesController.index);
router.get("/menu", pagesController.menu);
router.get("/loginClientes", pagesController.login);
router.get("/registro", pagesController.registro);
router.get("/promociones", pagesController.promociones);
router.get("/about", pagesController.about);

export default router;
