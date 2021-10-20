import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Details() {
  const params = useParams();
  const { id } = params;
  const { coins } = useSelector((state) => state);
  let ans;

  if (coins) {
    const coin = Object.values(coins.data).find((coin) => coin.id === id);
    const {
      name, rank,
      price_usd: priceUsd,
      market_cap_usd: marketCapUsd,
      volume24,
      percent_change_24h: percentChange24h,
    } = coin;

    ans = (
      <div>
        <p>{name}</p>
        <p>{rank}</p>
        <p>{priceUsd}</p>
        <p>{marketCapUsd}</p>
        <p>{volume24}</p>
        <p>{percentChange24h}</p>
      </div>

    );
  }

  return ans;
}

export default Details;
