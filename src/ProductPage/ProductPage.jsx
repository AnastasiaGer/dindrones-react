import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {projectFirestore} from '../firebase/config';
import './ProductPage.css';

const ProductPage = () => {
  const [item, setItem] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('products').doc(id).get().then((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setItem(doc.data())
      } else {
        setIsPending(false)
        setError('Could not fine that product')
    }
  })


  },[id])
  
  return (
    <div className="page">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p> }
      <section className="product" id="intro">
        <div className="container">
          <div className="product__wrapper" id="buy">
                  {item && (
        
            <div className="product__info">
              <h3 className="product__info-title">{ item.title}</h3>
              <div className="product__info-price">{ item.price} $</div>
              <div className="product__info-text">
                <svg>
                  <use xlinkHref="#checkmark"></use>
                </svg>
                Power density: <br />
                <span>{ item.text}</span>
              </div>
              <form action="" className="product__info-options">
                <div className="product__info-text">
                  This product is on backorder, please email me at:
                    <b>din@dindrones.com</b>
                  with your order details.
                </div>
              </form>
            </div>
      )}
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;