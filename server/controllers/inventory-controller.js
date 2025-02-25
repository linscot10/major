const InventoryModel = require("../model/Inventory.model");
const Inventory = require("../model/Inventory.model");
const UserModel = require("../model/User.model");
const User = require("../model/User.model")
const mongoose = require('mongoose');


const createInventoryController = async (req, res) => {
    try {
        const { email } = req.body
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
        else {
            req.body.donor = user?._id
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
            message: "Something happened ,user not found",
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


const getDonors = async (req, res) => {
    try {
        const organisation = req.body.userId
        const donorId = await InventoryModel.distinct("donor", {
            organisation
        })

        // console.log(donorId);
        const donors = await UserModel.find({ _id: { $in: donorId } })

        return res.status(200).json({
            success: true,
            message: "Donor Records Fetched Successfully",
            donors
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error getting donor records",
            error
        })
    }
}

const getHospitalController = async (req, res) => {
    try {
        const organisation = req.body.userId
        const hospitalId = await InventoryModel.distinct("hospital", {
            organisation
        })

        // console.log(donorId);
        const hospitals = await UserModel.find({ _id: { $in: hospitalId } })
        // console.log(hospitals);
        return res.status(200).json({
            success: true,
            message: "Hospital Records Fetched Successfully",
            hospitals
        })



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error getting hospital records",
            error
        })
    }
}


const getOrganisationController = async (req, res) => {
    try {
        const donor = req.body.userId
        const orgId = await InventoryModel.distinct("organisation", {
            donor
        })

        const organisations = await UserModel.find({ _id: { $in: orgId } })

        return res.status(200).json({
            success: true,
            message: "Organisation Records Fetched Successfully",
            organisations
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error getting Organisation records",
            error
        })
    }
}


const getOrganisationForHospitalController = async (req, res) => {
    try {
        const hospital = req.body.userId
        const orgId = await InventoryModel.distinct("organisation", {
            hospital
        })

        const organisations = await UserModel.find({ _id: { $in: orgId } })

        return res.status(200).json({
            success: true,
            message: " Hospital Organisation Records Fetched Successfully",
            organisations
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error getting hospital Organisation records",
            error
        })
    }
}
module.exports = {
    createInventoryController,
    getInventoryController,
    getDonors,
    getHospitalController,
    getOrganisationController,
    getOrganisationForHospitalController
}