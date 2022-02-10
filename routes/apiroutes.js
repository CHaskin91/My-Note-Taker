const fs = require('fs');

// This line means this file has been exported as a function
module.exports = function(app) {
    // API Get requests
    // Code will handle when a user visits the page.
    // One routes to index, one routes to notes
    app.get('/api/notes', function(req, res) {
        fs.readFile('./db/db.json', (err, data) => {
            // error handler
            if (err) throw err;
            // parse data into database
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });

}