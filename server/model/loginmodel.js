
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String
});

const loginModel = mongoose.model('logins', loginSchema); // 'Login' is the model name

module.exports = loginModel;
