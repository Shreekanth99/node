const express = require('express');
const app = express()

const path = require('path');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/userRouter.js')

app.use('/api/users', router)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});