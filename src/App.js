import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import MyContext from './Context';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(1);

  return (
    <MyContext.Provider value={{count, setCount}}>
        <Navbar counter={count}/>
        <Header />
        <Products />
        <Footer />
    </MyContext.Provider>
  );
}

export default App;
