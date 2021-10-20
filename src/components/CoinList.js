import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData } from '../redux/coins/coins';
import Coin from './Coin';
import Loading from './Loading';
import FilterInput from './FilterInput';

const Coinlist = () => {
  const coins = useSelector((state) => state.coins.data);
  const loading = useSelector((state) => state.coins.loading);
  const [filtered, setFiltered] = useState('');
  const updateFilter = (e) => {
    setFiltered(e.target.value)
  }
  const dispatch = useDispatch();
  const loadCoinAction = bindActionCreators(fetchApiData, dispatch);

  useEffect(() => {
    if (loading) {
      loadCoinAction();
    }
    return null;
  }, [loading]);

  console.log(coins);
  let ans = (<Loading />);
  // const AllCoins = coins.coins;
  // console.log(coins);
  // if(coins) {
  //   return (
  //     <div>
  //       {AllCoins.forEach((coin, rank)=> (
  //         <Coin key={rank} coin={coin}/>
  //       ))}
  //     </div>
  //   )
  // }

  // coin.name.include(value) || coin.name.include(value) 
  

  if (coins) {
    const allCoins = coins;
    console.log(allCoins);
    ans = Object.values(allCoins).filter(({ name }) => (
      name.toLowerCase().startsWith(filtered.toLowerCase())
    )).map((coin, id, rank, price_usd) => (
      <Coin key={id} name={rank} coin={coin} />
    ));
  }
  return (
    <>
      <FilterInput updateFilter={updateFilter} />
      {ans}
    </>
  )
}

export default Coinlist;