const mongoose = require("mongoose")

userSchema = new mongoose.Schema({
    role: {
        type: String,
        require: [true, 'Role is required'],
        enum: ['admin', 'organisation', 'donor', 'hospital']
    },
    name: {
        type: String,
        require: function () {
            if (this.role === 'donor' || this.role === 'admin') {
                return true
            }
            return false
        }
    },
    organisation: {
        type: String,
        require: function () {
            if (this.role === 'organisation') {
                return true
            }
            return false
        }
    },
    hospitalName: {
        type: String,
        require: function () {
            if (this.role === 'hospital') {
                return true
            }
            return false
        }
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Password is required'],
    },
    website: {
        type: String
    },
    address: {
        type: String,
        require: [true, 'Address is required'],
    },
    phone: {
        type: String,
        require: [true, 'phone is required'],
    },

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)