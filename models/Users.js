const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User model
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});


module.exports = Users = mongoose.model('users', UserSchema);
