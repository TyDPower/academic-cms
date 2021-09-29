const express = require('express');
require('dotenv/config');
const mdb = require('./utils/mongobd');

const postRoutes = require('./routes/posts')
const app = express();


mdb.connect();

app.use(express.json())
app.use('/posts', postRoutes);


app.listen(5000)