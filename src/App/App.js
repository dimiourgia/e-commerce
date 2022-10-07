import React from 'react';
import AppBar from '../Components/AppBar/AppBar';
import TopNav from '../Components/TopNav/TopNav';
import Home from '../Components/Home/Home';
import './App.css';



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
const addToCartHandler = () =>{
  setCartProductCount(cartProductCount+1);
  //rest of the stuff....
}



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
      <Home 
      addToCartHandler={addToCartHandler}
      />
    </div>  
  )

}
   

export default App;
