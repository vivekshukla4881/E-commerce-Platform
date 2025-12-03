// route_15 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:15}));
module.exports = router;
