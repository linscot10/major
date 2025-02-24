const InventoryModel = require("../model/Inventory.model");
const Inventory = require("../model/Inventory.model")
const User = require("../model/User.model")
const mongoose = require('mongoose');


const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            throw new Error("User Not Found");

        }

        // if (inventoryType === "in" && user.role !== 'donor') {
        //     throw new Error("Not A donor Account")
        // }
        // if (inventoryType === "out" && user.role !== 'hospital') {
        //     throw new Error("Not A hospital Account")
        // }

        if (req.body.inventoryType == 'out') {
            const requestedBloodGroup = req.body.bloodGroup;
            const requestedQuantityOfBlood = req.body.quantity;
            const organisation = new mongoose.Types.ObjectId(req.body.userId)

            const totalInOfRequestedBlood = await InventoryModel.aggregate([
                {
                    $match: {
                        organisation,
                        inventoryType: 'in',
                        bloodGroup: requestedBloodGroup
                    }
                }, {
                    $group: {
                        _id: '$bloodGroup',
                        total: { $sum: '$quantity' }
                    }
                }
            ]);
            console.log("Total In", totalInOfRequestedBlood)



            const totalIn = totalInOfRequestedBlood[0]?.total || 0
            // calculate blood out

            const totalOutOfRequestedBloodGroup = await InventoryModel.aggregate([
                {
                    $match: {
                        organisation,
                        inventoryType: 'out',
                        bloodGroup: requestedBloodGroup
                    }
                }, {
                    $group: {
                        _id: '$bloodGroup',
                        total: { $sum: '$quantity' }
                    }
                }
            ])

            const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0

            const availableQuantityOfBloodGroup = totalIn - totalOut


            if (availableQuantityOfBloodGroup < requestedQuantityOfBlood) {
                return res.status(500).json({
                    success: false,
                    message: `Only ${availableQuantityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`
                })
            }
            req.body.hospital = user?._id;
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
    console.log("req.body.userId:", req.body.userId);
    try {
        if (!mongoose.Types.ObjectId.isValid(req.body.userId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid userId format"
            });
        }
        const inventory = await Inventory.find({ organisation: req.body.userId })
            .populate('donor')
            .populate('hospital')
            .sort({ createdAt: -1 })
        return res.status(200).json({
            success: true,
            message: "get all records successfully",
            inventory
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