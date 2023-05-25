import express from "express"
import { getDb } from "../data/database.js"


const router = express.Router()
const db = getDb



//GET
router.get("/", async (req, res) => {
    await db.read()
    res.send(db.data.products)
  })
  
  router.get("/:id", (req, res) => {
    res.sendStatus(200)
  })

export default router