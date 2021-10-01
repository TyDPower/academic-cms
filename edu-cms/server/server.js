const express = require('express');
const studentsRoutes = require('./routes/studentRoutes')
const app = express();
const cors = require('cors');

app.set('view engine', 'ejs');

app.use(cors())
app.use(express.json());
app.use('/students', studentsRoutes);


app.listen(5000)