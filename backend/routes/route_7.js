// route_7 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:7}));
module.exports = router;
