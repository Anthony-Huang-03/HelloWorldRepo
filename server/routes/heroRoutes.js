import { Router } from "express";
import { getHeros, getHeroById, addHero, updateHero, deleteHero } from "../controllers/heroController.js";

const router = Router();

router.get("/heros", getHeros);

router.get("/heros/:id", getHeroById);

router.post("/heros", addHero);

router.put("/heros/:id", updateHero);

router.delete("/heros/:id", deleteHero);

export default router;