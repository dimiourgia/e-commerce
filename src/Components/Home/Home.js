import React from "react";
import './Home.css';

import product1 from '../../product1.png';

const items = [
    {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries' },
    {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'},
    {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'},
    {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'},
    {image:{product1}, desccription:"creativity stimulating tonic. Drink every morning to generate better ideas.", price: '$15', shippingStatus: 'available in all countries'}

]

const Home = () => {
    return(
    <div className="cardsContainer">
        {items.map(item => 
        <ItemCard 
            image={product1}
            desccription={item.desccription}
            price={item.price}
            shippingStatus={item.shippingStatus}
        >
        </ItemCard>)}        
    </div>
    )
}


const ItemCard = ({image, desccription, price, shippingStatus, addToCartHandler}) => {
    return(
    <div className="cardWrapper">
        <div className="itemImageContainer">
            <img src={image} alt='product' />
        </div>

        <div className="itemDetails">
            <div className="itemDescription">
                <p>{desccription}</p>
            </div>
            <div className="itemPrice">{price}</div>
            <div className='itemShippingStatus'>
                <p>{shippingStatus}</p>
            </div>
            <div className='addToCartContainer'>
                <button className="addToCartButton" onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </div>
    </div>
    )
}

export default Home;