// Action types
// const FETCH_API_DATA = 'COINS/FETCH_API_DATA';
const LOAD_DATA = 'COINS/LOAD_COINS_DATA';

const initialState = {};


// action creators
// export const fetchData = (payload) => ({
//   type: FETCH_API_DATA,
//   payload,
// });

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const fetchApiData = async (dispatch) => {
  const res = await fetch('https://coinlib.io/api/v1/coinlist?key=7aadada07bb3eee9&pref=USD&page=1&order=market_cap_desc');
  const data = await res.json();
  console.log("ABC")
  console.log(data)
  dispatch(loadData(data));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.payload;
    default: return state;
  }
};
export default reducer;
