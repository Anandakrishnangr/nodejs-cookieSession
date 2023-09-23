const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require("./routes/routes")
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.set('views', path.join(__dirname, 'src', 'views')); // Set the views directory
app.set('view engine', 'ejs'); // Use EJS as the view engine

// Routes
// const indexRoute = require('./src/routes/index');

app.use('/', router); // Use the index route defined in 'src/routes/index.js'
app.post('/test',(req,res)=>{
    console.log("testing");
})
module.exports = app;
