// route_8 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:8}));
module.exports = router;
