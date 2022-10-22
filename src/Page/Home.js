import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Loading from "../Components/Loading";
const api = `https://fakestoreapi.com/products`;

export default function Home() {
  const [product, setProduct] = useState();

  const getApiData = async () => {
    const response = await fetch(api).then((response) => response.json());
    setProduct(response);
  };

  useEffect(() => {
    getApiData();
  }, [api]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {product ? (
            product.map((item) => (
              <div className=" col-12 col-md-4">
                <Link to={`/product/${item.id}`} className="">
                  <div className="productComponent">
                    <div className="imgBox">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />
                    </div>

                    <p> {item.title}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
