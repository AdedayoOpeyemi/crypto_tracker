/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Coin = (props) => {
  const { coin, index } = props;
  const {
    id, name, rank, price_usd: priceUsd,
    market_cap_usd: marketCapUsd,
    volume24, percent_change_24h: percentChange24h,
  } = coin;

  return (
    <Link
      key={id}
      to={`/coin/${id}`}
      className={`
      div col coin-card p-5 d-block
      ${([1, 0, 0, 1][index % 4]) === 0 ? 'light-primary' : 'primary-blue'}
      `}
      data-testid={`button-${rank}`}
    >
      <p>{name}</p>
      <p>{rank}</p>
      <p>{priceUsd}</p>
      <p>{marketCapUsd}</p>
      <p>{volume24}</p>
      <p>{percentChange24h}</p>
    </Link>
  );
};

export default Coin;
