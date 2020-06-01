const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hola desde estudiantes.js');
});


module.exports = router;