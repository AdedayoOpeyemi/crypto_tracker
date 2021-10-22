import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchApiData } from '../redux/coins/coins';
import Loading from './Loading';

function Details() {
  const params = useParams();
  const { id } = params;
  const internationalNumberFormat = new Intl.NumberFormat('en-US');

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

  let ans = (<Loading />);
  if (coins && coins.length > 0) {
    const coin = coins.find((coin) => coin.id === id);
    const {
      name, nameid, symbol,
      price_usd: priceUsd,
      market_cap_usd: marketCapUsd,
      volume24,
      percent_change_24h: percentChange24h,
      percent_change_1h: percentageChange1h,
      percent_change_7d: percentageChange7d,
      tsupply, msupply,
    } = coin;

    ans = (
      <div className="container-fluid text-white details-header">
        <div className="row coin-header light-primary">
          <div className="d-flex flex-column justify-content-center text-center">
            <img
              src={`https://cryptologos.cc/logos/${nameid}-${symbol.toLowerCase()}-logo.svg`}
              // onerror={
              //   this.onerror=null,
              //   this.src='https://comnplayscience.eu/app/images/notfound.png'
              // }
              // eslint-disable-next-line react/no-unknown-property
              onError={(event) => {
                // eslint-disable-next-line no-param-reassign
                event.target.src = 'https://comnplayscience.eu/app/images/notfound.png';
                // eslint-disable-next-line no-param-reassign
                event.onerror = null;
              }}
              // onError={this.src = 'https://comnplayscience.eu/app/images/notfound.png'}
              alt={name}
              className="detailsImage d-block mx-auto"
            />
            <h3 className="coin-name">{name}</h3>
          </div>
        </div>
        <div className="row details-body flex-grow-1">
          <div>
            <ul className="col-12 m-0 pb-3 px-0 row row-cols-2 coin-property">
              <li className="col">
                <span className="property-title">Current Price:</span>
                <br />
                {' '}
                $
                {internationalNumberFormat.format(priceUsd)}
              </li>
              <li className="col">
                <span className="property-title">Market Cap:</span>
                <br />
                {' '}
                {internationalNumberFormat.format(marketCapUsd)}
              </li>
              <li className="col">
                <span className="property-title">24hr Trade Vol:</span>
                <br />
                {' '}
                {internationalNumberFormat.format(volume24)}
              </li>
              <li className="col">
                <span className="property-title">Last 24 hours:</span>
                <br />
                {internationalNumberFormat.format(percentChange24h)}
                %
              </li>
              <li className="col">
                <span className="property-title">Last hour:</span>
                <br />
                {internationalNumberFormat.format(percentageChange1h)}
                %
              </li>
              <li className="col">
                <span className="property-title">Last 7 days:</span>
                <br />
                {internationalNumberFormat.format(percentageChange7d)}
                %
              </li>
              <li className="col">
                <span className="property-title">Total Supply:</span>
                <br />
                {internationalNumberFormat.format(tsupply)}
              </li>
              <li className="col">
                <span className="property-title">Maximum Supply:</span>
                <br />
                {internationalNumberFormat.format(msupply)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return ans;
}

export default Details;
