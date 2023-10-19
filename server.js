const express = require('express');
const path = require('path');
const termData = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const fs = require('fs')

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    var data = fs.readFileSync(path.join(__dirname, './db/db.json'))
    res.send(JSON.parse(data))
}
);

app.post('/api/notes', (req, res) => {
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json')))
    let noteText = req.body;
    let uuid = data.length;
    noteText.id = uuid + 1;
    data.push(noteText);
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
    res.json(data)
})



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));