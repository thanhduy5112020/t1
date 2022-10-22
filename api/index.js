import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"

const app = express()

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bookinghotel");
        console.log("Connect successfully !!!");
    } catch (error) {
        console.log("Connect failure !!!");
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})


//middlewares
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.listen(3000, () => {
    connect()
    console.log(`Example app listening on port ${3000}`)
})