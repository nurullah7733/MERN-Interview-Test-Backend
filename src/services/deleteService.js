const mongoose = require("mongoose");
const deleteService = async (Request, dataModel) => {
  let deleteId = Request.params.id;

  try {
    if (mongoose.Types.ObjectId.isValid(deleteId)) {
      let deleteResult = await dataModel.deleteOne({ _id: deleteId });
      return { status: "success", data: deleteResult };
    } else {
      return { status: "fail", data: "Invalid Id" };
    }
  } catch (error) {
    return { status: "success", data: error.toString() };
  }
};

module.exports = deleteService;
