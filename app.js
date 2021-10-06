const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRouter = require('./routes/user.routes')
app.use('/users', userRouter)

app.listen(5000, ()=>{
    console.log('Hello')
});