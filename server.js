const express = require('express');
const path = require('path');
const termData = require('./db/db.json');
const PORT = 3001;

const app = express();

app.use(express.static('public'));

