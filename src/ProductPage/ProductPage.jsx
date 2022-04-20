import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import "./ProductPage.css";

const ProductPage = () => {
  const [item, setItem] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("products")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setItem(doc.data());
        } else {
          setIsPending(false);
          setError("Could not fine that product");
        }
      });
  }, [id]);

  return (
    <div className="page">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      <section className="product" id="intro">
        <div className="container">
          <div className="product__wrapper" id="buy">
            {item && (
              <div className="product__info">
                <div className="intro" id="intro">
                  <div className="container">
                    <div className="intro__wrapper">
                      <div className="intro__photo">
                        <img
                          src={`/img/items/${item.category}/${item.photo}`}
                          alt=""
                        />
                      </div>
                      <div className="intro__inner">
                        <h1 className="intro__title">{item.title}</h1>
                        <h2 className="intro__text">{item.text}</h2>
                        <div className="product__info-price">
                          {item.price} $
                        </div>
                        <h3>DESCRIPTION:</h3>
                        <ul className="product__info-text">
                          {item.description.map((des) => (
                            <li key={des}>{des}</li>
                          ))}
                        </ul>
                        <h3>SPECIFICATION:</h3>

                        <ul className="product__info-text">
                          {item.specification.map((sp) => (
                            <li key={sp}>{sp}</li>
                          ))}
                        </ul>

                        <h3>WHATS IN THE PACKAGE:</h3>

                        <ul className="product__info-text">
                          {item.package.map((pk) => (
                            <li key={pk}>{pk}</li>
                          ))}
                        </ul>
                        {/* <Link className="btn btn-inner" to="/products/1">Learn More</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
