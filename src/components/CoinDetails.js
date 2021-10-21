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
      name, nameid, symbol,
      price_usd: priceUsd,
      market_cap_usd: marketCapUsd,
      volume24,
      percent_change_24h: percentChange24h,
    } = coin;

    ans = (
      <div className="container text-white h-100">
        <div className="row coin-header light-primary">
          <div className="d-flex flex-column justify-content-center text-center">
            <img
              src={`https://cryptologos.cc/logos/${nameid}-${symbol.toLowerCase()}-logo.svg`}
              alt={name}
              className="detailsCardImage d-block mx-auto"
            />
            <h3 className="coin-name">{name}</h3>
          </div>
        </div>
        <div className="row primary-blue flex-grow-1">
          <div>
            <ul className="col-12 m-0 pb-3 px-0 shadow row row-cols-2">
              <li className="col">{priceUsd}</li>
              <li className="col">{priceUsd}</li>
              <li className="col">{priceUsd}</li>
              <li className="col">{priceUsd}</li>
            </ul>
            <p>{priceUsd}</p>
            <p>{marketCapUsd}</p>
            <p>{volume24}</p>
            <p>{percentChange24h}</p>
          </div>
        </div>
      </div>
    );
  }

  return ans;
}

export default Details;
