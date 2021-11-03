import {useEffect, useState} from 'react'
import axios from 'axios'
import Coin from './Coin'

function CoinsFetching() {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className="coin-search">
                <input onChange={handleChange} type="text" placeholder="Search..." className="coin-input"></input>
            </div>
            <div className="coin-container">
                <div className="coin-list">
                    {filteredCoins.map(coin => {
                        return (
                            <Coin key={coin.id} name={(coin.symbol).toUpperCase()} 
                            price={coin.current_price} image={coin.image}
                            price_change={coin.price_change_percentage_24h.toFixed(2)} market_cap={coin.market_cap}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
  }
  
  export default CoinsFetching;
  