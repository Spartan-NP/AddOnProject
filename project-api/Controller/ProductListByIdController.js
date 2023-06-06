const ProductListByIdModel = require("../Model/ProductListByIdModel");

module.exports.getProductListById = async (request, response) => {
  let { id } = request.params;

  try {
    let result = await ProductListByIdModel.find({ product_id: id });
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

module.exports.getProductById = async (request, response) => {
  let { id } = request.params;
  try {
    let result = await ProductListByIdModel.findById(id);
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
