import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const Coin = (props) => {
  const { coin, index } = props;
  const {
    id, nameid, symbol, name, price_usd: priceUsd,
    percent_change_24h: percentChange24h,
  } = coin;

  return (
    <Link
      key={id}
      to={`/coin/${id}`}
      className={`
      div col coin-card p-3 d-block position-relative no-underline
      ${([1, 0, 0, 1][index % 4]) === 0 ? 'light-card' : 'dark-card'}
      `}
      data-testid={`button-${id}`}
    >
      <div className="position-absolute top-0 end-0">
        <FaArrowCircleRight className="p-3" />
      </div>
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
          <img
            src={`https://cryptologos.cc/logos/${nameid}-${symbol.toLowerCase()}-logo.svg`}
            onError={(event) => {
              // eslint-disable-next-line no-param-reassign
              event.target.src = 'https://comnplayscience.eu/app/images/notfound.png';
              // eslint-disable-next-line no-param-reassign
              event.onerror = null;
            }}
            alt={name}
            className="coinCardImage"
          />
        </div>
        <div className="d-flex flex-column justify text-end">
          <h5>{name}</h5>
          <p>
            $
            {priceUsd}
          </p>
          <p>
            {percentChange24h}
            %
          </p>
        </div>
      </div>
    </Link>
  );
};

Coin.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameid: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price_usd: PropTypes.number.isRequired,
    percent_change_24h: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Coin;
