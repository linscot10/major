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
    }
})

model.exports = mongoose.model("Inventory", inventorySchema)