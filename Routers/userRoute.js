const express = require('express');
const path = require('path')
const router = express.Router();
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../', '/statics/home.html'));
});
router.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname,'../', '/statics/contact.html'));
});
router.get('/services', (req, res)=>{
    res.sendFile(path.join(__dirname,'../', '/statics/services.html'));
});

module.exports=router;