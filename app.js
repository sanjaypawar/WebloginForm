const path=require('path');

const express=require('express');
const bodyParser = require('body-parser');

const app=express();

const loginRoutes = require('./routes/login');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/login', loginRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);