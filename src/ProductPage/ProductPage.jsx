import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import "./ProductPage.css";
import Slider from "../Slider/Slider";
import ReviewFrom from "../ReviewForm/ReviewForm";
import ReviewList from '../ReviewList/ReviewList';

const ProductPage = () => {
  const [item, setItem] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState(null);

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
          setPhotos(doc.data().gallery);
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
      <section className="product section">
        <div className="container">
          {item && (
            <div className="product__info">
              <div className="product__photo">
                {photos && <Slider photos={photos} category={item.category} />}
              </div>
              <div className="product__inner">
                <h1 className="product__info-title">{item.title}</h1>
                <h2 className="product__info-text">{item.text}</h2>
                <div className="product__info-price">{item.price} $</div>
                {item.description && (
                  <div>
                    <h3 className="product__info-h3">DESCRIPTION:</h3>
                    <ul className="product__info-text">
                      {item.description.map((des) => (
                        <li className="product__info-p" key={des}>
                          {des}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.specification && (
                  <div>
                    <h3 className="product__info-h3">SPECIFICATION:</h3>

                    <ul className="product__info-text">
                      {item.specification.map((sp) => (
                        <li className="product__info-p" key={sp}>
                          {sp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.package && (
                  <div>
                    <h3 className="product__info-h3">WHATS IN THE PACKAGE:</h3>

                    <ul className="product__info-text">
                      {item.package.map((pk) => (
                        <li className="product__info-p" key={pk}>
                          {pk}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* <Link className="btn btn-inner" to="/products/1">Learn More</Link> */}
              </div>
            </div>
          )}
          <ReviewList />
      <ReviewFrom />
        </div>
      </section>

    </div>
  );
};

export default ProductPage;
