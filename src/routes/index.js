const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    //console.log(__dirname);
    //console.log(path.join(__dirname,'/views/index.html'))
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('index.html', {title: 'First Web Side'});
})

router.get('/contact', (req,res) => {
    res.render('contact.html', {title: 'Contact Page'});
})

module.exports = router;