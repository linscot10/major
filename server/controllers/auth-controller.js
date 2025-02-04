const express = require("express")
const User = require('../model/User.model')

const registerController = async (req, res) => {
    try {

    } catch (error) {
console.error(error)
res.status(500).json({
    success:false,
    message:"Error in Registered API",error
})
    }
}

module.exports = {
    registerController
}