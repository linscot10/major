const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    inventoryTpe: {
        type: String,
        require: [true, "inventory type required"],
        enum: ["in", "out"]
    },
    bloodGroup: {
        type: String,
        require: [true, "Blodd Group required"],
        enum: ['O+', 'O-', 'AB+', 'AB-', 'A+', 'A-', 'B+', 'B-']
    },
    quantinty: {
        type: Number,
        require: [true, 'blood quantity is required']
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: [true, 'organisation is required']
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: function () {
            return this.inventoryTpe === "out"
        }
    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: function () {
            return this.inventoryTpe === "in"
        }
    }

},{timestamps:true})

model.exports = mongoose.model("Inventory", inventorySchema)