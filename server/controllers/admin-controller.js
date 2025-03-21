const User = require("../model/User.model")

const getDonorsListController = async (req, res) => {

    try {
        const donorData = await User
            .find({ role: 'donor' })
            .sort({ createdAt: -1 })
        return res.status(200).json({
            success: true,
            TotalCount: donorData.length,
            message: 'Donor List fetched successfully',
            donorData
        })
    } catch (error) {
        console.error("something Happened ", error)
        return res.status(500).json({
            success: false,
            message: "Error in getting Donor List",
            error
        })
    }
}
const getHospitalListController = async (req, res) => {

    try {
        const hospitalData = await User
            .find({ role: 'hospital' })
            .sort({ createdAt: -1 })
        return res.status(200).json({
            success: true,
            TotalCount: hospitalData.length,
            message: 'Hospital List fetched successfully',
            hospitalData
        })
    } catch (error) {
        console.error("something Happened ", error)
        return res.status(500).json({
            success: false,
            message: "Error in getting Hospital List",
            error
        })
    }
}
const getOrganisationListController = async (req, res) => {

    try {
        const organisationData = await User
            .find({ role: 'organisation' })
            .sort({ createdAt: -1 })
        return res.status(200).json({
            success: true,
            TotalCount: organisationData.length,
            message: 'organisation List fetched successfully',
            organisationData
        })
    } catch (error) {
        console.error("something Happened ", error)
        return res.status(500).json({
            success: false,
            message: "Error in getting organisation List",
            error
        })
    }
}

module.exports = { getDonorsListController, getHospitalListController, getOrganisationListController }