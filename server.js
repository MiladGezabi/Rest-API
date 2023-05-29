// imports
import express from "express"
import cors from "cors"
import productRouter from "./routes/product.js"
import userRouter from './routes/user.js'
import searchRouter from './routes/search.js'




// konfigurationer.
const port = 5995
const server = express()

// cors
server.use( cors() )

// middlewares.
server.use("/api", express.json())

// routes.
server.use("/api/products", productRouter)
server.use("/api/users", userRouter)
server.use("/api/search", searchRouter)

// init.

server.listen(port, () => {
  console.log(`server is listening to ${port}`)
})

