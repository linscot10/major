const express = require("express")
const User = require('../model/User.model')
const bcrypt = require('bcryptjs')

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
                message: "User created successfully"
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

module.exports = {
    registerController
}