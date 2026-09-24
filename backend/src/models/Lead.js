const mongoose = require('mongoose');

const leadScehema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [3, 'Name must be at least 3 characters long'],
        maxLength: [50, 'Name must be at most 50 characters long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        maxLength: [100, 'Email cannot exceed 100 characters'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Phone number is invalid'],
        maxLength: [15, 'Phone number cannot exceed 15 characters'],
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'qualified', 'converted', 'lost'],
        default: 'new',
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Lead', leadScehema);