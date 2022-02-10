const fs = require('fs');

// This line means this file has been exported as a function
module.exports = function (app) {
    // API Get Requests
    // Code will handle when a user visits the page.
    // One routes to index, one routes to notes
    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', (err, data) => {
            // error handler
            if (err) throw err;
            // parse data into database
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });

    // API Post Requests
    // Code will handle when a user submits a form (submitting data to server)
    // One routes to index, one routes to notes
    app.post('/api/notes', function (req, res) {
        const userNotes = req.body;

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            dbData.push(userNotes);
            let number = 1;
            dbData.forEach((note, index) => {
                note.id = number;
                number++;
                return dbData;
            });
            console.log(dbData);

            stringData = JSON.stringify(dbData);

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if (err) throw err;
            });
        });
        res.send('Your note has been created!');
    });
}