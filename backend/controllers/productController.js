import Product from "../models/Product.js";
import mongoose from "mongoose";
const getProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find({});
    res.status(202).json({
      success: true,
      data: getAllProducts,
    });
  } catch (error) {
    console.error(`Error in Get All Product : ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const createProduct = async (req, res) => {
  try {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
      return res.status(404).json({
        success: false,
        message: "Please provide all fields",
      });
    }
    const newProduct = new Product(product);
    try {
      await newProduct.save();
      res.status(202).json({
        success: true,
        message: "Product successfully added.",
        data: newProduct,
      });
    } catch (error) {
      console.error(`Error in create Product : ${error.message}`);
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  } catch (error) {}
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const productdetails = req.body;

  // Validate ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  try {
    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      productdetails,
      { new: true, runValidators: true } // Options to return the updated document and validate fields
    );

    // Handle case where product is not found
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Respond with the updated product
    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error occurred in updateProduct:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSingleProduct = await Product.findByIdAndDelete(id);
    if (deleteSingleProduct) {
      res.status(202).json({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product might already deleted",
      });
    }
  } catch (error) {
    console.error("Error occured in deleteProduct", error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error ",
    });
  }
};

export { getProducts, createProduct, updateProduct, deleteProduct };
