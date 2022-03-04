const express = require('express')
require('dotenv').config();

const app = express()
const port = process.env.EXPRESS_PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
module.exports=app;