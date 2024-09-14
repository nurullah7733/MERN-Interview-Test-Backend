const mongoose = require("mongoose");

const getServiceById = async (Request, DataModel) => {
  let id = Request.params.id;
  let objectId = mongoose.Types.ObjectId;

  let query = {};

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      query._id = objectId(id);
      let data = await DataModel.aggregate([{ $match: query }]);
      return { status: "success", data: data };
    } else {
      return { status: "fail", data: "Invalid Id" };
    }
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = getServiceById;
