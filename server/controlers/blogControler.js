const Blogs = require("../model/modelBlogs.js");
const loginModel = require("../model/loginmodel.js"); // Use a more descriptive name like loginModel

exports.createBlog = async (req, res) => {
  try {
    const { title, blog, category, image } = req.body;
    const newBlog = new Blogs({ title, blog, category, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: "Failed to save the blog." });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find();
    console.log('All blogs:', allBlogs);
    res.status(200).json(allBlogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'An error occurred while fetching blogs' });
  }
};



exports.authid = async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  if (password !== cpassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  try {
    const existingUser = await loginModel.findOne({ email }); // Use loginModel instead of login
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const newUser = new loginModel({ name, email, password }); // Use loginModel instead of login
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


exports.loginid = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use the User model to find the user by email
    const user = await loginModel.findOne({ email });

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
}