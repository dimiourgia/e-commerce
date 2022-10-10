import React from "react";
import './HomeSkeleton.css';


const items=[1,2,3,4,5,6,7,8,9,10];

const HomeSkeleton = ()=>(
    <div className="sk_cardsContainer">
        {items.map(item => <ItemCard /> )}        
    </div>
)


const ItemCard = () => {
    return(
    <div className="sk_cardWrapper">
        <div className="sk_itemImageContainer">
        </div>

        <div className="sk_itemDetails">
            <div className="sk_itemDescription">
            </div>
            <div className="sk_itemPrice"></div>
            <div className='sk_itemShippingStatus'>
            </div>
            <div className='sk_addToCartContainer'>
            </div>
        </div>
    </div>
    )
}

export default HomeSkeleton;