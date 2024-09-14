const router = require("express").Router();
const {
  createDrawingController,
  getSingleDrawingController,
  getAllDrawingController,
  updateDrawingController,
  deleteDrawingController,
} = require("../controllers/drawing/drawingController");

// create drawing Api
router.post("/create-drawing", createDrawingController);
// get single drawing Api
router.get("/get-single-drawing/:id", getSingleDrawingController);
// get all drawing Api
router.get(
  "/get-all-drawing/:pageNo/:perPage/:searchKeyword",
  getAllDrawingController
);
// update drawing Api
router.post("/update-drawing/:id", updateDrawingController);
// delete drawing Api
router.get("/delete-drawing/:id", deleteDrawingController);

module.exports = router;
