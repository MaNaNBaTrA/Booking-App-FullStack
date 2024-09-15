import express from "express";
import { createRoom, DeleteRoom, GetAllRoom, GetRoom, UpdateRoom } from "../controllers/roomc.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, UpdateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, DeleteRoom);

//GET
router.get("/:id", GetRoom);

//GERoom
router.get("/", GetAllRoom);

export default router