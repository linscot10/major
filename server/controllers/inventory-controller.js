const Inventory = require("../model/Inventory.model")
const User = require("../model/User.model")


const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            throw new Error("User Not Found");

        }

        if (inventoryType === "in" && user.role !== 'donor') {
            throw new Error("Not A donor Account")
        }
        if (inventoryType === "out" && user.role !== 'hospital') {
            throw new Error("Not A hospital Account")
        }

        const inventory = new Inventory(req.body)
        await inventory.save()

        return res.status(201).json({
            success: true,
            message: "New Blood Record Added",
            data: inventory
        })
    } catch (error) {
        console.error('Something Happened', error)

        return res.status(500).json({
            success: false,
            message: "Something happened ",
            error
        })
    }
}

const getInventoryController = async (req, res) => {
    try {

        const inventory = await Inventory.find({ organisation: req.body.userId })
        return res.status(200).json({
            success: true,
            message: "get all records successfully",
            data: inventory
        })

    } catch (error) {
        console.error('Error fetching the inventory', error)

        return res.status(500).json({
            success: false,
            message: "Error fetching the inventory",
            error
        })
    }
}


module.exports = {
    createInventoryController,
    getInventoryController
}