const createService = async (Request, DataModel) => {
  let reqBody = Request.body;

  try {
    let createdData = await DataModel.create(reqBody);
    return { status: "success", data: createdData };
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = createService;
