import React from 'react';
import Home from './Components/Home/Home';
import LatestProducts from './Components/LatstProducts/LatestProducts';
const latestProductsPromise = fetch("http://localhost:3000/latest-products", {

}).then(res => res.json())

const App = () => {
  return (
    <div>
      <Home></Home>
      <div>
        <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
      </div>
    </div>
  );
};

export default App;