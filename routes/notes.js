// const fb = require('express').Router();
// //const { v4: uuidv4 } = require('uuid');
// //const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
// const clog = require('../Middleware/clog.js');


// // GET Route for retrieving all the feedback
// fb.get('/', (req, res) =>
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
// );

// // POST Route for submitting feedback
// fb.post('/', (req, res) => {
//   // Destructuring assignment for the items in req.body
//   const { title, text } = req.body;

  // // If all the required properties are present
  // if (title && text) {
  //   // Variable for the object we will save
  //   const newNote = {
  //     title,
  //     text,
  //   };

  //   readAndAppend(newNote, './db/db.json');

  //   const response = {
  //     status: 'success',
  //     body: newNote,
  //   };

  //   res.json(response);
  // } else {
  //   res.json('Error in posting your note');
  // }
// });

// module.exports = fb;
