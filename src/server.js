// const express = require("express") // OLD IMPORT SYNTAX
import express from "express" // NEW IMPORT SYNTAX (do not forget to add type: "module" to package.json to use this!!)

const server = express()

const port = 3001

server.listen(port, () => {
  console.log("Server is running on port:", port)
})
