import React, { useState } from 'react';
import ProductList from './ProductList'; // Importing default export

const mockProducts = [
  { id: 1, name: 'AndhraPradesh' ,capital:'Amaravathi'},
  { id: 2, name: 'Telangana' ,capital:'Hyderabad'},
  { id: 3, name: 'kerala' ,capital:'Thiruvananthapuram'},
  { id: 4, name: 'TamilNadu' ,capital:'Chennai'},
  { id: 5, name: 'Gujarat',capital:'Jaipur' },
];

const Dashboard = () => {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredProducts1 = mockProducts.filter(product =>
      product.name.toLowerCase().includes(value)
    );
    
    setProducts(filteredProducts1);
  };

  return (
    <div>
      <h2>STATES AND CAPITALS</h2>
      <input
        type="text,number"
        placeholder="Search required state"
        value={searchTerm}
        onChange={handleFilter}
      />
      <ProductList products={products} />
    </div>
  );
};

export default Dashboard;
//-----------------------------------------
//ProductList
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h3> STATES </h3>
      <ol>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default ProductList; // Correctly exporting as default
