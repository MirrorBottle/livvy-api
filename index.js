const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./route/router')

app.use(express.json())
app.use('/api/v1', router)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})