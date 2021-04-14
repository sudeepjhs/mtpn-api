const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const userRoute = require('./router/user');
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(userRoute);

sequelize.sync().then(result=>{
    // console.log(result);
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log(`Server started on 3000`);
    });
}).catch(err=>{
    console.log(err);
})