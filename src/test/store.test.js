import coinlibAPI from './__mocks__/coinlibAPI';
import store from '../redux/configureStore';
import { loadData } from '../redux/coins/coins';

describe('store test', () => {
  beforeEach(() => {
    store.dispatch(loadData(coinlibAPI));
  });

  test('store get 191 country information', () => {
    const { coins } = store.getState();
    expect(Object.keys(coins.data).length).toBe(100);
  });

  test('store get 191 country information', () => {
    const { coins } = store.getState();
    expect(Object.keys(coins)).toStrictEqual(['data', 'info', 'loading']);
  });
});
