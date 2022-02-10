const express = require('express');

// Tell Node that we are creating an "express" server
const app = express();
// Sets the initial port.  
const PORT = process.env.PORT || 3000;

// Sets up Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Point the server to our route files
// These routes give the server a map of how to respond 
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// Listener - will start the server
app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
  });