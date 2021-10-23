// Action types
const LOAD_DATA = 'COINS/LOAD_COINS_DATA';
const LOADING = 'COINS/LOADING';

const initialState = { data: [], loading: true };

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const fetchApiData = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const res = await fetch('https://api.coinlore.net/api/tickers/');
  const data = await res.json();
  dispatch(loadData(data));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...action.payload, loading: false };
    case LOADING:
      return { loading: true };
    default: return state;
  }
};
export default reducer;
