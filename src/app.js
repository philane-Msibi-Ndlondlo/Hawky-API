//imports
const express = require('express');
const morgan = require("morgan");
const helment = require("helmet");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./models/user");

//server setup
const app = express();

const port = process.env.PORT || 5000;
dotenv.config();
//import middlewaes
app.use(express.json());
app.use(morgan('common'));
app.use(helment());
app.use(cors());

mongoose.connect(process.env.DB_URL, 
{ useNewUrlParser:true, useUnifiedTopology: true } ,
 () => {
    console.log("Connected to DB");
});

const usersRoutes = require('./routes/users');
const timeRoutes = require('./routes/time');

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.json({message: 'Hello from me Philane Msibi'});
});

app.use('/api/attendanceRegister/users', usersRoutes);
app.use('/api/attendanceRegister/time', timeRoutes);

//listen
app.listen(port, () => console.log(`listening on port: ${port}`));
