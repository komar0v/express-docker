const express = require('express')
const app = express()

const port = 4441;

const router = require("./src/routes")
app.use(router)

app.use(express.json())

app.listen(port, async() => {
    console.log("starting at "+ port)
})