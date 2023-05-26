import express from "express";
import { getDb } from "../data/database.js";
import { sortResults } from "../utils/generalFunctions.js";



const router = express.Router();
const db = getDb();

// Get requests.
router.get('/', (req, res) => {
  const query = req.query.q;
  const sort = req.query.sort;
  const order = req.query.order;

  db.read()
  let results = db.data.products

  if (query) {
    results = results.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  }

  if (sort && order) {
    results = sortResults(results, sort, order);
  }

  res.json(results);
});




export default router;
