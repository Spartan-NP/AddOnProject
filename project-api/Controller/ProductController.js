const ProductListModel = require("../Model/ProductListModal");
module.exports.getProductList = async (request, response) => {
  try {
    let result = await ProductListModel.find();
    response.status(200).send({
      status: true,
      result,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      status: false,
      message: "server error",
    });
  }
};
