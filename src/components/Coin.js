/* eslint-disable react/prop-types */
import React from 'react';
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
      ${([1, 0, 0, 1][index % 4]) === 0 ? 'light-primary' : 'primary-blue'}
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

export default Coin;
