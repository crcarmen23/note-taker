const express = require('express');
const path = require('path');
const termData = require('./db/db.json');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  fs.readFile(path.join(__dirname, './db/db.json'))
  .then
);





app.listen(PORT, () => console.log(`App listening on port ${PORT}`));