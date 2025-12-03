// route_5 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:5}));
module.exports = router;
