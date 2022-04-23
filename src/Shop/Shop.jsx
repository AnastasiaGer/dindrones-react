import { Link } from "react-router-dom";
import "./Shop.css";
import { projectFirestore } from "../firebase/config";
import { useEffect, useState } from "react";

const Main = () => {
  const [items, setItems] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("products")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No products to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setItems(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="page">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}

      <div className="shop section" id="shop">
        <div className="container">
          <div className="shop__container">
            {items &&
              items.map((item) => {
                if (item.availability === true) {
                  return (
                    <div className="shop__inner" key={item.id}>
                      <div className="shop__photo">
                        <img
                          src={`/img/items/${item.category}/${item.photo}`}
                          alt=""
                        />
                      </div>

                      <div className="shop__content">
                        <h3 className="shop__title">{item.title}</h3>
                        <h2 className="shop__subtitle">{item.subtitle}</h2>
                        <div className="product__info-price">
                          {" "}
                          {item.price} $
                        </div>
                        <p className="shop__text">{item.text}</p>

                        <div className="shop__buttons">
                          <Link className="btn" to={`/products/${item.id}`}>
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
