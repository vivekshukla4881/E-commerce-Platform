// route_4 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:4}));
module.exports = router;
