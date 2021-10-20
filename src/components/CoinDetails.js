import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import countryLink from '../countryName';
import Loading from './Loading';
// import CityList from './cityList';

function Details() {
  const params = useParams();
  const { id } = params;
  console.log(params);
  const { coins } = useSelector((state) => state);
  console.log(coins);
  let ans = (<Loading />);
  if (coins) {
    let ans
    const coin = Object.values(coins.data).find((coin) => coin.id === id);
    const {
     symbol, name, nameid, rank, price_usd, market_cap_usd, volume24, percent_change_24h
    } = coin;
  

    ans = (
      <div>
        <p>{name}</p>
        <p>{rank}</p>
        <p>{price_usd}</p>
        <p>{market_cap_usd}</p>
        <p>{volume24}</p>
        <p>{percent_change_24h}</p>
      </div>
      
    );
  }

  return ans;
}

export default Details;