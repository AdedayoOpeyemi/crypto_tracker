import React from 'react';
import { Link } from 'react-router-dom';

const Coin = (props) => {
  const {
    id, symbol, name, nameid, rank, price_usd, market_cap_usd, volume24, percent_change_24h
  } = props.coin;

  return (
    <Link
      key={id}
      to={`/coin/${id}`}
      className="div coin-card p-5"
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