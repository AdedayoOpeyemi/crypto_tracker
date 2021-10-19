import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Coin from './coin'

const Coinlist = () => {
  const coins = useSelector((state) => state.coins);

  return (
    <div>
      {coins.forEach((coin, index)=> (
        <Coin key={index} coin={coin}/>
      ))}
    </div>
  )
}

export default Coinlist