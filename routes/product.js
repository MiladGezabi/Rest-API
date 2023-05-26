// imports.
import express from "express"
import { getDb } from "../data/database.js"
import { isValidProduct, hasID, isValidId } from "../utils/validation.js"
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
  
  if( !isValidId(req.params.id) ) {
    res.sendStatus(400)
    return
  }
  let id = Number(req.params.id)

  await db.read()
  let maybeProduct = db.data.products.find(product =>
    product.id === id)

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
router.put("/:id", async (req, res) => {
  if( !isValidId(req.params.id) ) {
    res.sendStatus(400)
    return
  }
  let id = Number(req.params.id)


  if( !isValidProduct(req.body) ){
    res.sendStatus(400)
    return
  }

  let updatedProduct = req.body

  await db.read()
  let originalProductIndex = db.data.products.findIndex(product =>
    product.id === id)
  
  if(originalProductIndex === -1) {
    res.sendStatus(404)
    return
  }

  updatedProduct.id = generateRandomId()
  db.data.products[originalProductIndex] = updatedProduct
  await db.write()
  res.sendStatus(200)
})



// Delete request.
router.delete("/:id", async (req, res) => {
  
  if( !isValidId(req.params.id) ) {
    res.sendStatus(400)
    return
  }
  let id = Number(req.params.id)

  await db.read()
  let maybeProduct = db.data.products.find(product =>
    product.id === id)

  if (!maybeProduct) {
    res.sendStatus(404)
    return
  }

  db.data.products = db.data.products.filter(product =>
    product.id !== id)
  await db.write()
  res.sendStatus(200)
})





// exports.
export default router