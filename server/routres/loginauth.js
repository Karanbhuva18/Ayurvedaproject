const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); 

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
    email: String,
    password: String
  });
  
  const User = mongoose.model('stus', userSchema);
  

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Use the User model to find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'An error occurred' });
    }
  });
  
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});