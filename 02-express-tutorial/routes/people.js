const express = require("express");

// Routing:
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// Leaner way of setting up routes, same functionality but here we are "chaining" our methods for matching urls
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// // PUT http method to update data (editing the data)
// router.put("/:id", updatePerson);

// // Delete http method (similar to put but will not de-structure the params objects here, instead directly accessing it)
// router.delete("/:id", deletePerson);

module.exports = router;
