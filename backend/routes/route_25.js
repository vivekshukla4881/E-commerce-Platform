// route_25 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:25}));
module.exports = router;
