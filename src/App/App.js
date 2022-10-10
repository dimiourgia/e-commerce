import React from 'react';
import AppBar from '../Components/AppBar/AppBar';
import TopNav from '../Components/TopNav/TopNav';
import Home from '../Components/Home/Home';
import './App.css';
import HomeSkeleton from '../Components/HomeSkeleton/HomeSkeleton';

//Items to display on homepage

const product1='';

const items = [
  {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries' },
  {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'},
  {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'},
  {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'},
  {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'}

]

const App = () =>{
  
  
  // AppBar states and methods
    //for searchbar
  const [activeCategory, setActiveCategory] = React.useState('clothing & shoes');
  
  const onCategorySelection = (categoryCaption) => {
    setActiveCategory(categoryCaption);
  }

    //for cart Product Conter
    



  //TopNav states and methods
  const [searchString, setSearchString] = React.useState('');

  const searchStringChageHandler = (event) =>{
    setSearchString(event.target.value);
  } 

  const clearSearchString = () => {
    setSearchString('');
  }

//Home states and methods
const [cartProductCount, setCartProductCount] = React.useState(0);
const [products, setItems] = React.useState('');
const [productsLoaded, setProductsLoaded] = React.useState(false);

const addToCartHandler = () =>{
  setCartProductCount(cartProductCount+1);
  //rest of the stuff....
}

//simulate product fetching from api..

const api = ()=>{
  setItems(items);
  setProductsLoaded(true);
}

setTimeout(api,4000);

  return(
    <div>
      <AppBar 
      searchString = {searchString} 
      onChangeHandler = {searchStringChageHandler} 
      clearSearchString= {clearSearchString} 
      cartProductCount={cartProductCount}
      />
      <TopNav 
      activeCategory={activeCategory} 
      onItemClick={onCategorySelection} 
      />
      {!productsLoaded && <HomeSkeleton></HomeSkeleton>}
      {productsLoaded && <Home 
      addToCartHandler={addToCartHandler}
      items={products}
      /> }

    </div>  
  )

}
   

export default App;
