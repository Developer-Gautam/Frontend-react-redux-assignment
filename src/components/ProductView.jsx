import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://api-test.innoloft.com/product/${id}/`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <img src="https://www.innoloft.com/images/logo.svg" alt="Innoloft Logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.type}</p>
          <p>{product.description}</p>
        </section>
        <section>
          <h3>Details</h3>
          <ul>
            <li>
              <strong>Technologies/Categories:</strong> {product.technologies_categories}
            </li>
            <li>
              <strong>Business Models:</strong> {product.business_models}
            </li>
            <li>
              <strong>TRL:</strong> {product.trl}
            </li>
            <li>
              <strong>Investment Effort / Cost:</strong> {product.investment_effort_cost}
            </li>
          </ul>
        </section>
        <section>
          <h3>Video</h3>
          <iframe src={product.video} title={product.title}></iframe>
        </section>
        <section>
          <h3>User info</h3>
          <img src={product.user_info.image} alt={product.user_info.name} />
          <p>{product.user_info.name}</p>
          <p>{product.user_info.company_name}</p>
        </section>
        <section>
          <h3>Map</h3>
          <iframe src={product.map} title={product.title}></iframe>
        </section>
      </main>
    </div>
  );
};

export default ProductView;
