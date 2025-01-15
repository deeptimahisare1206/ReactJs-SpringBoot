import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [iserror, setiserror] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:8090/products");
        setproducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error" + error);
        setiserror(true);
      }
    };

    fetchdata();
  }, []);

  if (iserror) {
    return (
      <>
        <div className=" grid place-items-center h-96">
          <p className="text-red-600 text-5xl">Something went wrong......</p>
          <p className="text-pink-950 text-2xl underline">-----Start the Server Please----</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="cardbox flex flex-wrap bg-slate-900">
        {products.map((product,index) => (
    <Link to={`products/${product.product_id}`} >
          <div className="card bg-slate-100 rounded p-6 m-5 place-items-center" key={index}>
            <div className="">
              <img src={product.image_data} alt="Not Found" />
            </div>
            <h1 className="font-bold text-3xl">{product.product_brand}</h1>
            <p className="p-2 text-purple-500 text-xl">
              {product.product_name}
            </p>

<table className="w-full m-4 ">
<tbody>
  <tr>
    <td>Release Date</td>
    <td> {product.release_date}</td>
  </tr>

  <tr>
  <td> <p className="p-2 font-bold font-mono text-lg text-green-400">
              ₹{product.product_price}
            </p>
    </td>
    <td>

            <Link
              to="/oneproduct"
              className="bg-blue-500 text-white p-2 rounded font-bold"
            >
              Add to Cart
            </Link>
    </td>
  </tr></tbody>
</table>




           
          </div>
      </Link>
        ))}
        </div>
    </>
  );
};

export default Home;
