const express = require('express');
const app = express()
const bodyParser = require("body-parser")
const path = require('path');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))


const router = require('./routes/userRouter.js')

app.use('/api/users', router)

app.use('/Images', express.static('./Images'))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});