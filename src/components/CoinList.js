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
    setFiltered(e.target.value);
  };
  const dispatch = useDispatch();
  const loadCoinAction = bindActionCreators(fetchApiData, dispatch);

  useEffect(() => {
    if (loading) {
      loadCoinAction();
    }
    return null;
  }, [loading]);

  let ans = (<Loading />);

  if (coins) {
    const allCoins = coins;
    ans = Object.values(allCoins).filter(({ name }) => (
      name.toLowerCase().startsWith(filtered.toLowerCase())
    )).map((coin, index) => <Coin key={coin.id} index={index} name={coin.rank} coin={coin} />);
  }
  return (
    <>
      <FilterInput updateFilter={updateFilter} />
      <div className="container">
        <div className="row row-cols-2">
          {ans}
        </div>
      </div>
    </>
  );
};

export default Coinlist;
