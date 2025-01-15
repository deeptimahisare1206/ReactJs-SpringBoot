import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
    const {product_id} = useParams();
    const [products, setproducts] = useState([]);
    const [iserror, setiserror] = useState(false);
  
    useEffect(() => {
      const fetchproduct= async () => {
        try {
          const response = await axios.get(`http://localhost:8090/products/${product_id}`);
          setproducts(response.data);
        //   console.log(response.data);
        } catch (error) {
          console.log("error" + error);
          setiserror(true);
        }
      };
  
      fetchproduct();
    }, [product_id]);
  
    if (iserror) {
      return (
        <>
          <div className="error grid place-items-center h-96">
            <p className="text-red-600 text-5xl">Something went wrong......</p>
            <p className="text-pink-950 text-2xl underline">-----Start the Server Please----</p>
          </div>
        </>
      );
    }

    
    return (
      <>
    <div className=" flex h-full">

        <div className="flex-1">

          <img src={products.image_data} alt=" not found" className="px-24 py-24" />
        </div>
        <div className=" flex flex-col gap-7 flex-1 py-10 ">
        


            <h1 className="font-bold text-7xl">{products.product_brand}</h1>
              <p className="p-2 text-purple-500 text-3xl">
                {products.product_name}
              </p>
              <p  className={`w-fit p-4 ${products.release_date ==null ? "hidden" :"inline-block"}`}>
              {products.release_date}
              </p>
              <p className="p-2 font-bold font-mono text-2xl text-green-400">
                ₹{products.product_price}
              </p>

  <p className={`w-fit p-4 ${products.product_status ==0 ? "bg-green-700" :"bg-red-500"}`}>{products.product_status ==0 ? "Available" :"Out of Stock"}</p>
              <p className="text-xl italic border-2 border-teal-700 p-6 ">Description: {products.product_desc}</p>
              <Link
                to="/"
                className="bg-blue-500 w-36 text-white p-2 rounded font-bold text-center"
              >
                Add to Cart
              </Link>
             
        </div>
    </div>

      </>
    );


}

export default Product;