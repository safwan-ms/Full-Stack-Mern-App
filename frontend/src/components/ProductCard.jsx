import React, { useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [enter, setEnter] = useState();

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (success) {
      setToastMessage("Product deleted successfully");
      setToastType("success");
    } else {
      setToastMessage("Product Might be already deleted");
      setToastType("error");
    }

    console.log(message, success ? "success" : "error");
    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, 3000);
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    await updateProduct(id, updatedProduct);
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast toast-top toast-end">
          <div className="bg-red-700 alert">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
      {/* Product Card */}
      <div className="h-[224px] sm:h-[300px] md:h-[320px] shadow-xl card bg-base-200 ">
        {/* Product Image */}
        <figure className="h-2/3">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </figure>
        {/* Product Details */}
        <div className="flex flex-col p-2 px-3 md:px-5">
          <h2 className="font-bold text-md md:text-xl">{product.name}</h2>
          <p className="pb-4 text-xs font-semibold text-accent-content">
            ₹{product.price}
          </p>
          <div className="flex justify-end gap-2">
            <button
              className=" btn btn-xs sm:btn-sm md:btn-md btn-info"
              onClick={() =>
                document.getElementById("my_modal_1").showModal(product._id)
              }
            >
              <MdEditSquare className="md:text-lg " />
            </button>
            <button
              className=" btn btn-xs sm:btn-sm md:btn-md btn-error bg-error"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <RiDeleteBin6Fill className="md:text-lg" />
            </button>
          </div>
        </div>
        {/* Modal */}
        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box bg-base-200">
            {/* Modal Title */}
            <h3 className="text-lg font-bold">Update Product</h3>
            <div className="flex flex-col gap-4 pb-2 mt-6 md:pb-4">
              {/* Name Input */}
              <label className="flex items-center gap-2 py-4 input input-bordered input-xs sm:input-sm md:input-md rounded-xl input-primary">
                Name :
                <input
                  type="text"
                  className="grow text-accent-content"
                  value={updatedProduct.name}
                  placeholder="Edit the product name"
                  name="name"
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                />
              </label>
              {/* Price Input */}
              <label className="flex items-center gap-2 py-4 input input-bordered input-xs sm:input-sm md:input-md rounded-xl input-primary">
                Price :
                <input
                  type="number"
                  name="price"
                  value={updatedProduct.price}
                  className="grow text-accent-content"
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                  placeholder="Edit the product price"
                />
              </label>
              {/* Image Input */}
              <label className="flex items-center gap-2 py-4 input input-bordered input-xs sm:input-sm md:input-md rounded-xl input-primary">
                Image :
                <input
                  type="text"
                  name="image"
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                  value={updatedProduct.image}
                  className="grow text-accent-content"
                  placeholder="Enter the URL"
                />
              </label>
            </div>
            {/* Modal Buttons */}
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-info hover:bg-info btn-xs sm:btn-sm "
                  onClick={() =>
                    handleUpdateProduct(product._id, updatedProduct)
                  }
                >
                  Update
                </button>
              </form>
              <form method="dialog">
                <button className="btn btn-xs sm:btn-sm btn-error">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default ProductCard;
