import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
export default function ProductItem() {
  const [product, setProduct] = useState();
  let { id } = useParams();
  
  const getApiData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`
    ).then((response) => response.json());
    setProduct(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="container">
      {product ? (
        <div className="row">
          <div className="col-6">
            <img
              src={product?.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <h3 className="pt-5 mt-5 mb-5"> {product.title}</h3>
            <p> {product.description}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
