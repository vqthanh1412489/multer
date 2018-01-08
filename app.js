const express = require('express');
const app = express();
const upload = require('./multer');

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('hone');
});
app.post('/', upload.array('image'), (req, res) => {
    res.send('Success!');
});
module.exports = app;
