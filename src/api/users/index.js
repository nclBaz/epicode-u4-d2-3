// ******************************************* USERS RELATED ENDPOINTS ***********************************

/* ********************************************** USERS CRUD ENDPOINTS ***********************************

1. CREATE --> POST http://localhost:3001/users/ (+body)
2. READ --> GET http://localhost:3001/users/ (+ optional query params)
3. READ (single user) --> GET http://localhost:3001/users/:userId
4. UPDATE (single user) --> PUT http://localhost:3001/users/:userId (+ body)
5. DELETE (single user) --> DELETE http://localhost:3001/users/:userId

*/

import express from "express" // 3RD PARTY MODULE (npm i express)
import fs from "fs" // CORE MODULE (no need to install it!!!)
import { fileURLToPath } from "url" // CORE MODULE
import { dirname, join } from "path" // CORE MODULE

const usersRouter = express.Router() // an Express Router is a set of similar endpoints grouped in the same collection

// ****************************** HOW TO GET USERS.JSON PATH *****************************************

// target --> D:\Epicode\2022\BE-MASTER-03\U4\epicode-u4-d2-3\src\api\users\users.json

// 1. We gonna start from the current's file path --> D:\Epicode\2022\BE-MASTER-03\U4\epicode-u4-d2-3\src\api\users\index.js
console.log("CURRENTS FILE URL: ", import.meta.url)
console.log("CURRENTS FILE PATH: ", fileURLToPath(import.meta.url))
// 2. We can obtain the parent's folder path --> D:\Epicode\2022\BE-MASTER-03\U4\epicode-u4-d2-3\src\api\users\
console.log("PARENT FOLDER PATH: ", dirname(fileURLToPath(import.meta.url)))
// 3. We can concatenate parent's folder path with "users.json" --> D:\Epicode\2022\BE-MASTER-03\U4\epicode-u4-d2-3\src\api\users\users.json
console.log("TARGET: ", join(dirname(fileURLToPath(import.meta.url)), "users.json"))

const usersJSONPath = join(dirname(fileURLToPath(import.meta.url)), "users.json")

// ***************************************************************************************************

// 1. POST http://localhost:3001/users/ (+body)
usersRouter.post("/", (req, res) => {
  // 1. Read the request the body

  // 2. Add some server generated informations (unique id, createdAt, ..)

  // 3. Save the new user into users.json file

  // 4. Send back a proper response

  res.send({ message: "Hello I am the POST route" })
})

// 2. GET http://localhost:3001/users/
usersRouter.get("/", (req, res) => {
  // 1. Read the content of users.json file, obtaining an array
  const fileContentAsABuffer = fs.readFileSync(usersJSONPath) // Here you obtain a BUFFER object, which is a MACHINE READABLE FORMAT
  console.log("file content: ", fileContentAsABuffer)
  const usersArray = JSON.parse(fileContentAsABuffer)
  console.log("file content: ", usersArray)
  // 2. Send it back as a response
  res.send(usersArray)
})

// 3. GET http://localhost:3001/users/:userId
usersRouter.get("/:userId", (req, res) => {
  res.send({ message: "Hello I am the GET single user route" })
})

// 4. PUT http://localhost:3001/users/:userId
usersRouter.put("/:userId", (req, res) => {
  res.send({ message: "Hello I am the UPDATE single user route" })
})

// 5. DELETE http://localhost:3001/users/:userId
usersRouter.delete("/:userId", (req, res) => {
  res.send({ message: "Hello I am the DELETE single user route" })
})

export default usersRouter // Please do not forget to export!
