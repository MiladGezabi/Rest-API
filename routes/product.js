// imports.
import express from "express"
import { getDb } from "../data/database.js"


// konfigurationer.
const router = express.Router()
const db = getDb()


// Get requests.
router.get("/", async (req, res) => {
  await db.read()
  res.send(db.data.products)
})

router.get("/:id", (req, res) => {
  res.sendStatus(200)
})

// Post request.
router.post("/", (req, res) => {
  let maybeProduct = req.body


  if(isValidProduct(maybeProduct)) {

    res.sendStatus(200)
  } else {


    res.sendStatus(400)
  }
})
function isValidProduct(p) {
  if( (typeof p) !== "object" || p === null ) {
    return false
  }

  let nameIsValid = (typeof p.name) === "string"
  nameIsValid = nameIsValid && p.name !== ""
  let priceIsValid = (typeof p.price) === "number"
  priceIsValid = priceIsValid && p.price >= 0
  let imageIsValid = (typeof p.image) === "string"
  imageIsValid = imageIsValid && p.image !== ""
  let tagsIsValid = (typeof p.tags) === ["string"]
  tagsIsValid = tagsIsValid && p.tags !== [""]

  if(!nameIsValid) {
    return false
  }else if(!priceIsValid) {
    return false
  }else if(!imageIsValid) {
    return false
  }else if(!tagsIsValid) {
    return false
  }

  return true
}

function hasID(object) {
  let idIsValid = (typeof object.id) === "number"
  idIsValid = idIsValid && object.id >= 0
  
  return idIsValid
}





// exports.
export default router