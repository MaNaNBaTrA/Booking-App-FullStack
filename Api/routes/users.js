import express from "express";
import {  DeleteUser, GetAllUser, GetUser, UpdateUser } from "../controllers/userc.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser,UpdateUser)

//DELETE
router.delete("/:id",verifyUser,DeleteUser)

//GET
router.get("/:id",verifyUser,GetUser )

//GET ALL
router.get("/",verifyAdmin, GetAllUser)

export default router