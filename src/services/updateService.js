const mongoose = require("mongoose");
const updateService = async (Request, DataModel) => {
  let id = Request.params.id;
  let reqBody = Request.body;

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      let data = await DataModel.updateOne({ _id: id }, { $set: reqBody });
      return { status: "success", data: data };
    } else {
      return { status: "fail", data: "Invalid Id" };
    }
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = updateService;
