import React from 'react';
import { Link } from 'react-router-dom';

const Coin = (props) => {
  const {
    id, name, rank, price_usd, market_cap_usd, volume24, percent_change_24h
  } = props.coin;
  const { index } = props;

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
      <p>{price_usd}</p>
      <p>{market_cap_usd}</p>
      <p>{volume24}</p>
      <p>{percent_change_24h}</p>
      {/* <Country
        id={countries.indexOf(country)}
        carteName={id}
        name={name}
        regions={regions}
        todayConfirmed={todayConfirmed}
        todayNewConfirmed={todayNewConfirmed} */}
    </Link>
  );
}

export default Coin;