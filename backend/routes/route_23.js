// route_23 placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({route:23}));
module.exports = router;
