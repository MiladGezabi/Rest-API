// imports.
import express from "express"
import { getDb } from "../data/database.js"
import { isValidProduct, hasID } from "../utils/validation.js"
import { generateRandomId } from "../utils/generalFunctions.js"


// konfigurationer.
const router = express.Router()
const db = getDb()


// Get requests.
router.get("/", async (req, res) => {
  await db.read()
  res.send(db.data.products)
})

router.get("/:id", async (req, res) => {
  let maybeiId = Number(req.params.id)

  if( isNaN(maybeiId) || maybeiId < 0 ) {
    res.sendStatus(400)
    return
  }

  await db.read()
  let maybeProduct = db.data.products.find(product =>
    product.id === maybeiId)

  if (!maybeProduct) {
    res.sendStatus(404)
    return
  }

  res.send(maybeProduct)
})

// Post request.
router.post("/", async (req, res) => {
  let maybeProduct = req.body


  if(isValidProduct(maybeProduct)) {
    await db.read()
    maybeProduct.id = generateRandomId()
    db.data.products.push(maybeProduct)
    await db.write()
    res.sendStatus(200)
  } else {


    res.sendStatus(400)
  }
})

// Put request.



// Delete request.
router.delete("/:id", async (req, res) => {
  let maybeiId = Number(req.params.id)

  if( isNaN(maybeiId) || maybeiId < 0 ) {
    res.sendStatus(400)
    return
  }

  await db.read()
  let maybeProduct = db.data.products.find(product =>
    product.id === maybeiId)

  if (!maybeProduct) {
    res.sendStatus(404)
    return
  }

  db.data.products = db.data.products.filter(product =>
    product.id !== maybeiId)
  await db.write()
  res.sendStatus(200)
})





// exports.
export default router