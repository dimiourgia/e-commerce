import React from 'react';
import { useState } from 'react';
import AppBar from '../Components/AppBar/AppBar';
import TopNav from '../Components/TopNav/TopNav';
import './App.css';



const App = () =>{
  const [activeCategory, setActiveCategory] = React.useState('clothing & shoes');
  
  const onCategorySelection = (categoryCaption) => {
    setActiveCategory(categoryCaption);
  }

  return(
    <>
      <AppBar />
      <TopNav activeCategory={activeCategory} onItemClick={onCategorySelection}></TopNav>
    </>  
  )

}
   

export default App;
