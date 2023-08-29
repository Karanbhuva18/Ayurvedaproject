const express = require("express");
const blogControler = require('../controlers/blogControler.js');
const router = express.Router();

router.post('/store', blogControler.createBlog); // Make sure the route is '/store'

router.get('/all', blogControler.getAllBlogs);
router.post('/signup', blogControler.authid);

router.post('/logins', blogControler.loginid);


module.exports = router;
