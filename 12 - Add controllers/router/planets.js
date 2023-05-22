const express = require("express");
const router = express.Router();
const {
  getAll,
  getPlanetById,
  create,
  updatePlanetById,
  deletePlanetById,
} = require("../controller/planets.js");

router.get("/", getAll);
router.get("/:id", getPlanetById);
router.post("/", create);
router.put("/:id", updatePlanetById);
router.delete("/:id", deletePlanetById);

module.exports = router;
