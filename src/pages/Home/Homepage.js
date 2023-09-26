import React, { useState } from 'react';
import 'aframe-ar';
import './homepage.css';

function Homepage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app">
      <h1>Ứng dụng AR với A-Frame</h1>
      <a-scene>
      <a-box position="0 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    </a-scene>
      <div className="menu">
        <h2>Chọn sản phẩm:</h2>
        <button onClick={() => handleProductSelection('viggo')}>Viggo</button>
        <button onClick={() => handleProductSelection('product2')}>Sản phẩm 2</button>
        <button onClick={() => handleProductSelection('product3')}>Sản phẩm 3</button>
      </div>
    </div>
  );
}

export default Homepage;
