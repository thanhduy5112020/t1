import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"


export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err);
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(
            req.params.id,
        )
        res.status(200).json("Hotel has been delete!!")
    } catch (err) {
        next(err);
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(
            req.params.id,
        )
        res.status(200).json(hotel)
    } catch (err) {
        next(err);
    }
}

export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(hotels)
    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
}

export const countByType = async (req, res, next) => {
    try {
        const hotelCount1 = await Hotel.countDocuments({ type: "One Star" })
        const hotelCount2 = await Hotel.countDocuments({ type: "Two Star" })
        const hotelCount3 = await Hotel.countDocuments({ type: "Three Star" })
        const hotelCount4 = await Hotel.countDocuments({ type: "Four Star" })
        const hotelCount5 = await Hotel.countDocuments({ type: "Five Star" })
        res.status(200).json([
            { type: "One Star", count: hotelCount1 },
            { type: "Two Star", count: hotelCount2 },
            { type: "Three Star", count: hotelCount3 },
            { type: "Four Star", count: hotelCount4 },
            { type: "Five Star", count: hotelCount5 },
        ])
    } catch (err) {
        next(err);
    }
}

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        console.log(hotel.rooms)
        const list = await Promise.all(hotel.rooms.map(room => {
            console.log(room)
            return Room.findById(room);
        }))
        console.log(list)
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
}





