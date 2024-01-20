const router = require('express').Router();


const noteRouter = require('./db');



router.use('/db', noteRouter);


module.exports = router;
