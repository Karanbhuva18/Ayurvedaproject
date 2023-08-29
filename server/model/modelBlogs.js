const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
    ,
    image: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('blogsadds', blogSchema);
