import User from "../models/User.js"
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"


export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync("B4c0/\/", salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        await newUser.save()
        res.status(200).send("User has been created")
    }
    catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        console.log("hello world")
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username!"))

        // if (req.body.password != user.password) {
        //     return next(createError(400, "Wrong password or username!"))
        // }

        const token = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin}, 
            process.env.JWT
        )

        const { password, isAdmin, ...otherDetails } = user._doc
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ ...otherDetails })
        // const { password, isAdmin, ...otherDetails } = user._doc
        // res
        //     .status(200)
        //     .json({ ...otherDetails })
    }
    catch (err) {
        next(err)
    }
}