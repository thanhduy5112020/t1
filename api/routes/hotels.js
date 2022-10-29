import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin, verifyToken} from "../utils/verifyToken.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREAT
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put("/:id", verifyAdmin, updateHotel)
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
//GET
router.get("/:id", getHotel)
//GET ALL
router.get("/", getHotels)

export default router