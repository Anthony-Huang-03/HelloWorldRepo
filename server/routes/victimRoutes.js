import { Router } from "express";
import { getVictims, getVictimById, addVictim, updateVictim, deleteVictim } from "../controllers/victimController";

const router = Router();

router.get("/victims", getVictims);

router.get("/victims/:id", getVictimById);

router.post("/victims", addVictim);

router.put("/victims/:id", updateVictim);

router.delete("/victims/:id", deleteVictim);

export default router;