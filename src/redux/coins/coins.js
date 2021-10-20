// Action types
// const FETCH_API_DATA = 'COINS/FETCH_API_DATA';
const LOAD_DATA = 'COINS/LOAD_COINS_DATA';
const LOADING = 'COINS/LOADING';

const initialState = {data: [], loading: true};


// action creators
// export const fetchData = (payload) => ({
//   type: FETCH_API_DATA,
//   payload,
// });

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const fetchApiData = () => async (dispatch) => {
  dispatch({type: LOADING })
  const res = await fetch('https://api.coinlore.net/api/tickers/');
  const data = await res.json();
  // console.log("ABC")
  // console.log(data)
  dispatch(loadData(data));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...action.payload, loading: false }
    case LOADING:
      return {loading: true}
    default: return state;
  }
};
export default reducer;
