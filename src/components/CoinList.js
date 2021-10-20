import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData } from '../redux/coins/coins';
import Coin from './Coin';
import Loading from './Loading';

const Coinlist = () => {
  const coins = useSelector((state) => state.coins.data);
  const loading = useSelector((state) => state.coins.loading);
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
  

  if (coins) {
    const allCoins = coins;
    console.log(allCoins);
    ans = Object.values(allCoins).filter(({ name }) => (
      name.toLowerCase()
    )).map((coin, id, rank, price_usd) => (
      <Coin key={id} name={rank} coin={coin} />
    ));
  }
  return ans
}

export default Coinlist;