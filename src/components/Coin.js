import React from 'react'

const Coin = ({name, price, price_change, market_cap, image}) => {
    return (
        <>
           <img className="coin-img" src={image} alt={name}></img>
            <div className="coin-column">
                <p className="coin-item-name">
                    {name}
                </p>
                <p className="coin-item-price">
                    {price}$ 
                </p>            
                {price_change < 0 ? (
                    <p className="coin-change-red">{price_change}%</p>      
                ) : (
                    <p className="coin-change-green">+{price_change}%</p>
                )}
                <p className="coin-item-cap">
                    {market_cap.toLocaleString()}$
                </p>         
            </div>
            <hr/>
        </>
    )
}

export default Coin
