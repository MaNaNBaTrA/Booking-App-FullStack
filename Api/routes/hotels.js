import express from "express";
import { countByCity, countByType, createHotel, DeleteHotel, GetAllHotel, GetHotel, UpdateHotel } from "../controllers/hotelc.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, UpdateHotel);

//DELETE
router.delete("/:id", verifyAdmin, DeleteHotel);

//GET
router.get("/find/:id", GetHotel);

//GET ALL
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

router.get("/", GetAllHotel);

export default router