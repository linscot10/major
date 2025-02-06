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

        
    } catch (error) {
        console.error('Something Happened', error)

        return res.status(500).json({
            success: false,
            message: "Something happened ",
            error
        })
    }
}

module.exports = {
    createInventoryController,
}