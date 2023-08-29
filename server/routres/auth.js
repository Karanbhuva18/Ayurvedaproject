const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3001;

const DB = 'mongodb+srv://karanbhuva:YkQ5jJALhenG678Y@cluster0.7hyybqv.mongodb.net/Student?retryWrites=true&w=majorit';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String
});

const Users = mongoose.model('stus', userSchema);

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());

app.post('/signup', async (req, res) => { // Corrected the endpoint name from '/singup' to '/signup'
    const { name, email, password, cpassword } = req.body;

    if (password !== cpassword) {
        return res.status(400).json({ message: "Passwords don't match" });
    }

    try {
        const existingUser = await Users.findOne({ email }); // Changed User to Users
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const newUser = new Users({ name, email, password }); // Added name
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// const User = mongoose.model("stu", {
//     name: String,
//     email: String,
//     password: String,
//     cpassword: String
// });

// app.use(express.json());

// app.post("http://localhost:3001/signup", async (req, res) => {
//     try {
//         const { name, email, password, cpassword } = req.body;

//         if (!name || !email || !password || !cpassword) {
//             return res.status(400).json({ error: "Please fill all the fields" });
//         }

//         if (password !== cpassword) {
//             return res.status(400).json({ error: "Passwords do not match" });
//         }

//         const newUser = new User({
//             name,
//             email,
//             password,
//             cpassword
//         });

//         await newUser.save();

//         res.status(201).json({ message: "User registered successfully" });
//     } catch (e) {
//         res.status(500).json({ e: "Internal server error" });
//     }
// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });

