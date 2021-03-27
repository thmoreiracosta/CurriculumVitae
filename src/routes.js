const express = require("express")
const routes = express()


routes.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})



module.exports = routes;