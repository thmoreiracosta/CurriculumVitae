const express = require("express")
const server = express()
const routes = require("./routes")

server.use(express.static("public"))

// routes
server.use(routes)

server.listen(1315, () => console.log('rodando...'))