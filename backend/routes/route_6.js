// route_6 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:6}));
module.exports = router;
