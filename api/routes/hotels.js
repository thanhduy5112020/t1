import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel,countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";
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
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router