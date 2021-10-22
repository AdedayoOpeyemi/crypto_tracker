import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import coinlibAPI from './__mocks__/coinlibAPI';
import store from '../redux/configureStore';
import { loadData } from '../redux/coins/coins';
// import App from '../App';
import Coin from '../components/Coin';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>,
  ),
});

describe('Coin component', () => {
  beforeEach(() => {
    store.dispatch(loadData(coinlibAPI));
  });

  test('COin details components', () => {
    const { coins } = store.getState();
    const coin = coins.data[0];
    const { getByText } = renderWithRedux(
      <Coin key={coin.id} index={0} name={coin.rank} coin={coin} />,
    );
    expect(getByText('Bitcoin') !== null).toBe(true);
  });
});
