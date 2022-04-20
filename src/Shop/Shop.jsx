import { Link } from 'react-router-dom';
import './Shop.css';
import {projectFirestore} from '../firebase/config';
import { useEffect, useState } from 'react';

const Main = () => {
  const [items, setItems] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('products').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No products to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setItems(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })
  }, [])

  return (
    <div className="page">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p> }
      <div className="intro" id="intro">
        <div className="container">
          <div className="intro__wrapper">
            <div className="intro__photo">
              <img src="img/items/charger/1.png" alt="" />
            </div>
            <div className="intro__inner">
              <h2 className="intro__title">
                Din battery box
              </h2>
              <h1 className="intro__text">
                4s18p 18650 battery box with individual cell fuses, controlled
                by high quality BMS with Bluetooth connectivity, enclosed in a
                custom box with your name on it.
              </h1>

              <Link className="btn btn-inner" to="/products/1">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shop section" id="shop">
        <div className="container">
          <div className="shop__container">
            {items && items.map((item) => (
              <div className="shop__inner" key={item.id}>
                <div className="shop__photo">
                  <img src={`/img/items/${item.category}/${item.photo}`}
                    alt="" />
                </div>

                <div className="shop__content">
                  <h3 className="shop__title">{item.title}</h3>
                  <h2 className="shop__subtitle">{item.subtitle}</h2>
                  <div className="product__info-price"> {item.price} $</div>
                  <p className="shop__text">
                    {item.text}
                  </p>

                  <div className="shop__buttons">
                    <Link className="btn" to={`/products/${item.id}`}>Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
