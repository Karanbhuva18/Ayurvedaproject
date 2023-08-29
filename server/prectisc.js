const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser") // Change this line to import bodyparser
const blogroutes = require('./routres/blogRoutes.js')
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyparser.json({ limit: '25mb' })); // Use bodyparser here
app.use(bodyparser.urlencoded({ extended: true, limit: '25mb' })); // Use bodyparser here
mongoose.connect("mongodb+srv://karanbhuva:W3SwRAT3tPXE0YGe@cluster0.7hyybqv.mongodb.net/Student?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ Database connected Successfully');
}).catch((error) => {
    console.error('💥 Error connecting to the database : ', error);
});


const port = 5000;
app.use('/blogs', blogroutes);

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
