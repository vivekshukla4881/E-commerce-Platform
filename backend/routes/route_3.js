// route_3 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:3}));
module.exports = router;
