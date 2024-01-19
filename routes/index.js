const router = require('express').Router();


const feedbackRouter = require('./db');



router.use('/db', feedbackRouter);


module.exports = router;
