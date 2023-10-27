import React from 'react';
import './App.css'

function ProductDetails({ product }) {

  const backgroundStyle = {
    backgroundColor: '#e0f0fa',
    height: '100%',
    width: '100%',
    margin: '5px',
    padding: '5px',
    justifyContent: 'center',
    display: 'flex'
  };

  return (
    <div style={backgroundStyle} className='app'>
      <div className="product-details" id='product-details' style={{ backgroundColor: '#238fd1', width: '80%', height: '70%', justifyContent: 'center', borderRadius: '20px' }}>
        <div className='container' style={{ display: 'flex', flexDirection: 'row', margin: '5px', padding: '5px' }}>
          <div className='image' style={{ width: '50%', height: '80%' }}>
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className='info' style={{margin: '5px', justifyContent: 'center', width: '25%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
          </div>
          <div className='desc' style={{margin: '5px', justifyContent: 'center', width: '25%', height: '100%'}}>
            <p>Descrição: {product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
