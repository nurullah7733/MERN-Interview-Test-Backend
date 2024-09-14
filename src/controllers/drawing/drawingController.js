const drawingModel = require("../../models/drawing/drawingModel");
const createService = require("../../services/createService");
const deleteService = require("../../services/deleteService");
const getServiceById = require("../../services/getServiceById");
const listService = require("../../services/listService");
const updateService = require("../../services/updateService");

// create drawing controller
exports.createDrawingController = async (req, res) => {
  const { title } = req.body;
  // Validate title and
  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a string" });
  }

  let data = await createService(req, drawingModel);
  res.status(200).json(data);
};

// get single drawing controller by ID
exports.getSingleDrawingController = async (req, res) => {
  let data = await getServiceById(req, drawingModel);
  res.status(200).json(data);
};

// get all drawing controller
exports.getAllDrawingController = async (req, res) => {
  // search by title
  let regexValue = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ title: regexValue }];

  let data = await listService(req, drawingModel, searchArray);
  res.status(200).json(data);
};

// update drawing controller
exports.updateDrawingController = async (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a string" });
  }

  try {
    let data = await updateService(req, drawingModel);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ success: "fail", data: error.message });
  }
};

// delete drawing controller
exports.deleteDrawingController = async (req, res) => {
  let data = await deleteService(req, drawingModel);
  res.status(200).json(data);
};
