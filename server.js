const express = require('express');
const path = require('path');
const  clog  = require('./Middleware/clog.js');
//const api = require('./routes/index.js');
const notes = require('./routes/notes.js');
const fb = express.Router();
const {readFromFile, writeToFile, readAndAppend} = require('./helpers/Utils.js')
const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

app.use(express.static('public'));

// GET Route for the Splash Page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);
const { v4: uuidv4 } = require('uuid');
app.post('/api/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;
  console.log(req.body);
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id:uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting your note');
  }
})
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
