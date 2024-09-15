import express from "express";
import { createHotel, DeleteHotel, GetAllHotel, GetHotel, UpdateHotel } from "../controllers/hotelc.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, UpdateHotel);

//DELETE
router.delete("/:id", verifyAdmin, DeleteHotel);

//GET
router.get("/:id", GetHotel);

//GET ALL
router.get("/", GetAllHotel);

export default router