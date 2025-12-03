// route_12 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:12}));
module.exports = router;
