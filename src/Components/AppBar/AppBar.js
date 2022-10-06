import React from 'react';
import './AppBar.css';
import leftLogo from '../../Logo.png';
import searchLogo from '../../searchLogo.svg';
import closeLogo from '../../close.svg';


const AppBar = ({searchString, onChangeHandler, clearSearchString})=>{

    return(
        <div id='AppBar'>
            <div className='firstWrapper'>
                <img id="leftLogo" src={leftLogo} alt='logo'></img>
                <div id='register' className='register'>
                    <button id='registerButton' className='registerButton'>Register</button>
                </div>
            </div>
            
            <div className='midWrapper'>
                <SearchBox searchString={searchString} onChangeHandler={onChangeHandler} clearSearchString={clearSearchString}></SearchBox>
            </div>
            
            <div className='lastWrapper'>
                <SignInButton></SignInButton>
                <MyCartButton></MyCartButton>
            </div>
        </div>
    );
    
}

const SearchBox = ({searchString, onChangeHandler, clearSearchString}) =>{
return(
    <>
    <div id='searchArea' className="searchBoxWrapper">
        <div className='searchLogoWrapper'>
            <img id='searchLogo'  src={searchLogo} alt='Search Logo'/>
        </div>
        
        <input type='text' placeholder='Search Item' className='inputSearch' onChange={onChangeHandler} value={searchString}/>
        
        <div className='searchLogoWrapper' >
            <button className='closeButton' onClick={ clearSearchString }>
                <img id='closeLogo' src={closeLogo} alt='Close Logo' />
            </button>
        </div>
        
    </div>
    </>
)
}

const SignInButton = ()=>{
    return(
    <>
    <div id='signInButtonWrapper'>
        <button className='signInButton' onClick={()=>{}}>Sign In</button>
    </div>
    </>
    )
}


const MyCartButton = ()=>{
    return(
    <>
    <div id='myCartButtonWrapper' >
        <button className='myCartButton' onClick={()=>{}}>My Cart</button>
    </div>
    </>
    )
}

export default AppBar;