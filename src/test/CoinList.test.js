import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import coinlibAPI from './__mocks__/coinlibAPI';
import store from '../redux/configureStore';
import { loadData } from '../redux/coins/coins';
import App from '../App';
import CoinList from '../components/CoinList';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>,
  ),
});

describe('Coinlist component', () => {
  beforeEach(() => {
    store.dispatch(loadData(coinlibAPI));
  });

  test('It loads all of the 100 coins from the store', () => {
    renderWithRedux(<CoinList />);
    const { coins } = store.getState();
    const coinList = document.getElementById('all-coins');
    expect(coinList.childNodes.length).toBe(coins.data.length);
  });

  test('Childnode of the list are links', () => {
    renderWithRedux(<CoinList />);
    const coinList = document.getElementById('all-coins');
    expect(coinList.childNodes[0].nodeName === 'A').toBe(true);
  });
});
