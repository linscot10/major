const express = require("express")
const User = require('../model/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            })
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword

        const user = new User(req.body)

        await user.save();

        if (user) {
            res.status(201).json({
                success: true,
                message: "User created successfully", user
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: " Unable to register User! Please try again"
            })
        }

    } catch (error) {
        console.error("Error during user registration:", error)
        res.status(500).json({
            success: false,
            message: "Error in Registered API", error
        })
    }
}

const loginController = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(404).json({
                success: false,
                message: "invalid credentials"
            })
        }

        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if (!comparePassword) {
            return res.status(500).json({
                success: false,
                message: "invalid credentials"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.status(200).json({
            success: true,
            message: "Logged In successfully",
            token,
            data: user
        })
    } catch (error) {
        console.error("Something Happened", error)
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        })
    }
}


const currentUserController = async (req, res) => {
    try {
        const user = await findOne({ _id: req.body.userId })
        return res.status(200).json({
            success: true,
            message: "User Fetched Successfully"
        })

    } catch (error) {
        console.error("User Not Found", error)
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }
}
module.exports = {
    registerController,
    loginController,
    currentUserController
}