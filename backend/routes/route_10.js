// route_10 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:10}));
module.exports = router;
