import React, { useState } from "react";
import { useProductStore } from "../store/product.js";
import { FaCalendarCheck } from "react-icons/fa";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    if (success) {
      setToastMessage(`✔️ ${message}`);
      setToastType("success");
    } else {
      setToastMessage(`⚠️ ${message}`);
      setToastType("error");
    }
    // Optionally clear the toast after a timeout\
    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, 3000);
    setNewProduct({ name: "", price: "", image: "" });
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center ">Create Product </h1>
      <div className="flex justify-center mt-7">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="toast toast-center ">
            <div
              className={`rounded-full p-5 bg-${toastType} text-md text-success-content font-semibold`}
            >
              <span>{toastMessage}</span>
            </div>
          </div>
        )}
        {/* Input container*/}
        <div className="w-[300px] p-4 md:w-2/4 rounded-2xl bg-neutral">
          {/* Name Input */}
          <div className="pb-2 md:pb-4">
            <label className="flex items-center gap-2 py-4 input input-bordered input-xs sm:input-sm md:input-md rounded-xl">
              Name :
              <input
                type="text"
                className="grow"
                name="name"
                placeholder="Enter the product name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </label>
          </div>
          {/* Price Input */}
          <div className="pb-2 md:pb-4">
            <label className="flex items-center gap-2 py-4 input input-bordered input-xs sm:input-sm md:input-md rounded-xl">
              Price :
              <input
                type="text"
                name="price"
                className="grow"
                placeholder="Enter the product price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </label>
          </div>
          {/* Image Input */}
          <div className="pb-2 md:pb-4">
            <label className="flex items-center gap-2 py-4 text-xs input input-bordered input-xs sm:input-sm md:input-md rounded-xl">
              Image :
              <input
                type="text"
                name="image"
                className="grow "
                placeholder="Give the image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
            </label>
          </div>
          {/* Add Button */}
          <div className="flex justify-end ">
            <div className="px-5 ">
              <button
                onClick={handleAddProduct}
                className="btn btn-xs sm:btn-sm md:btn-md btn-info "
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
