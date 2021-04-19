const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Controllers
// -- REST API
const getPosts = require('./controllers/getPosts');
const getPost = require('./controllers/getPost');
const addPosts = require('./controllers/addPosts');
const deletePost = require('./controllers/deletePost');
const updatePost = require('./controllers/updatePost');

// -- Authentication
const adminLogin = require('./controllers/adminLogin');

// Midlwares
app.use(cors());
app.use(express.json());

// Database logic
const dbURI = 'mongodb+srv://evelina2641:nxllE5SbovAJmY6V@cluster0.zryle.mongodb.net/gardening-blog?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => app.listen(PORT));

// Rest API routes
// -- GET
// --- all posts
app.get('/posts', getPosts);

// --- single post
app.get('/posts/:id', getPost);

// -- POST
app.post('/posts', addPosts);

// -- PUT
app.put('/posts/:id', updatePost);

// -- DELETE
app.delete('/posts/:id', deletePost);

// Rest API routes scheme
// - GET
// -- /posts
// -- /posts/:id
// - POST
// -- /posts
// - PUT
// -- /posts/:id
// - DELETE
// -- /posts/:id

// Authentication
app.post('/login', adminLogin);
