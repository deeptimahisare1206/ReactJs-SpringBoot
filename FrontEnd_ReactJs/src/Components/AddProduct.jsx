import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  // const [iserror, setiserror] = useState(false);
  const [product, setProduct] = useState({
    // product_id: "",
    product_name: "",
    product_desc: "",
    product_brand: "",
    product_price: "",
    product_Category: "",
    product_quantity: "",
    release_date: "",
    product_status: false,
  });
  // -----------x----------Image-------------x---------

  const [image, setImage] = useState(null);
  const handleImageChange=(e)=>{
    setImage(e.target.files[0]);
  }

  // -----------x----------------x-------------------------x---------
  const handleInputChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = async (e) => {
    e.preventDefault();
    // console.log(product);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8090/products/add",
    //     product,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(product),
    //     }
    //   );

    //   console.log("Product added successfully", response.data);
    // } catch (error) {
    //   console.log("Error:", error);
    //   // setiserror(true);
    // }

// --------------------------------x---Submit---x----------------------
const formData = new FormData();
formData.append("imageFile",image);
formData.append("product",new Blob([JSON.stringify(product)],{type:"application/json"}));

axios.post("http://localhost:8090/products/add",formData,{headers:{"Content-Type" : "multipart/form-data",},})
.then((response)=>{
  console.log("Product added successfull!",response.data);
  alert("Product added successfull!")
})
.catch((error)=>{
  console.error("Error adding Products" , error);
  alert("Error adding Products.");
})

// --------------------------------x----------/--------x----------------------
  };

  // =======================================================
  return (
    <>
      <div className="bg-slate-500 p-5">
        <div className="bg-gray-200 p-5 w-fit place-self-center rounded-3xl">
          <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">
            ADD PRODUCT
          </h1>
          <form onSubmit={ProductRegister} className="flex flex-col gap-3">
            <table className="w-auto border-collapse">
              <tbody>
                <tr className="border-b-2 border-b-gray-300 ">
                  <td className="p-4">
                    {" "}
                    <label>Name:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="product_name"
                      value={product.product_name}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Description:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <textarea
                      name="product_desc"
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      value={product.product_desc}
                      onChange={handleInputChange}
                    ></textarea>
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Brand:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="text"
                      name="product_brand"
                      value={product.product_brand}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Price:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="number"
                      name="product_price"
                      min="0"
                      value={product.product_price}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Category:</label>
                  </td>

                  <td className="p-4">
                    <select
                      name="product_Category"
                      value={product.product_Category}
                      onChange={handleInputChange}
                      className="border-teal-700 border-2 bg-transparent w-full outline-none p-2"
                    >
                      <option value="">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Stationory">Stationory</option>
                      <option value="Home Appliances">Home Appliances</option>
                      <option value="Toys">Toys</option>
                    </select>
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Quantity:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="number"
                      name="product_quantity"
                      id="product_quantity"
                      value={product.product_quantity}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>

                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Release Date:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="date"
                      name="release_date"
                      id="release_date"
                      value={product.release_date}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Image</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="w-8 h-8"
                      name="product_status"
                      onChange={(e) => setProduct({...product
                        ,product_status:e.target.checked
                      })}
                    />
                    <label> Available</label>
                  </td>

                  <td className="text-center">
                    <button className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl" type="submit">
                      ADD
                    </button>
                    {/* <input
                      type="submit"
                      value="Add"
                      className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl  "
                    /> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
