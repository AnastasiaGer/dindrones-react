import { useParams } from 'react-router-dom';
import './ProductPage.css';
import useFetch from '../useFetch.js';
const ProductPage = () => {

  const { id } = useParams()
  const {data: item} = useFetch('https://api.npoint.io/be795535d96d9ac59526/products/' + id)
  
  return (
    <div className="page">
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