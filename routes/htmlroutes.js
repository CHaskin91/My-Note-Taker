const path = require('path');

// This line means this file has been exported as a function
module.exports = function(app) {
    
    // HTML Get requests
    // Code will handle when a user visits the page.
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // If no matching route found.  default to index
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};