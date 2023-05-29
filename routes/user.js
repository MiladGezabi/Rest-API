import express from "express"
import { getDb } from "../data/database.js"
import { isValidUser, isValidId } from "../utils/validation.js";
import { generateRandomId } from "../utils/generalFunctions.js";


const router = express.Router()
const db = getDb()



// Get requests.
router.get("/", async (req, res) => {
  await db.read();
  res.send(db.data.users);
});

router.get("/:id", async (req, res) => {
  if (!isValidId(req.params.id)) {
    res.sendStatus(400);
    return;
  }
  const id = Number(req.params.id);

  await db.read();
  const maybeUser = db.data.users.find((user) => user.id === id);

  if (!maybeUser) {
    res.sendStatus(404);
    return;
  }

  res.send(maybeUser);
});

  // POST request.
  router.post("/", async (req, res) => {
    let maybeUser = req.body
  
  
    if(isValidUser(maybeUser)) {
      await db.read()
      maybeUser.id = generateRandomId()
      db.data.users.push(maybeUser)
      await db.write()
      res.send({ id: maybeUser.id })
    } else {
  
  
      res.sendStatus(400)
    }
  })


  //PUT request
  router.put("/:id", async (req, res) =>{
    if (!isValidId(req.params.id)) {
      res.sendStatus(400);
      return;
    }

    const id = Number(req.params.id);
    
    if(!isValidUser(req.body)){
      res.sendStatus(400);
      return;
    }

    const UpdatedUser = req.body;

    await db.read();
    let originalUserIndex = db.data.users.findIndex(user =>
       user.id === id);
    if ( originalUserIndex === -1 ) {
      res.sendStatus(404);
      return;
    }

    
    db.data.users[originalUserIndex] = UpdatedUser
    await db.write()
    res.sendStatus(200)
  })




  //DELETE request

  router.delete("/:id", async (req,res) => {
    if (!isValidId(req.params.id)){
      res.sendStatus(400);
      return;
    }
    const id = Number(req.params.id);
    await db.read();
    const maybeUser = db.data.users.find((user) => user.id === id);
    
    if (!maybeUser) {
      res.sendStatus(404);
      return;
    }

    db.data.users = db.data.users.filter((user) => user.id !== id);
    await db.write();
    res.sendStatus(200);
  })

export default router