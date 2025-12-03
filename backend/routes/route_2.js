// route_2 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:2}));
module.exports = router;
