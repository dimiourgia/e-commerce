import React from 'react';
import AppBar from '../Components/AppBar/AppBar';
import TopNav from '../Components/TopNav/TopNav';
import './App.css';



const App = () =>{
  
  
  // AppBar states and methods
  const [activeCategory, setActiveCategory] = React.useState('clothing & shoes');
  
  const onCategorySelection = (categoryCaption) => {
    setActiveCategory(categoryCaption);
  }


  //TopNav states and methods
  const [searchString, setSearchString] = React.useState('');

  const searchStringChageHandler = (event) =>{
    setSearchString(event.target.value);
  } 

  const clearSearchString = () => {
    setSearchString('');
  }


  return(
    <>
      <AppBar searchString = {searchString} onChangeHandler = {searchStringChageHandler} clearSearchString= {clearSearchString} />
      <TopNav activeCategory={activeCategory} onItemClick={onCategorySelection}></TopNav>
    </>  
  )

}
   

export default App;
