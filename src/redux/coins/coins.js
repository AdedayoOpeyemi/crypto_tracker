// Action types
const FETCH_API_DATA = 'COINS/FETCH_API_DATA';

const initialState = {};

// const selectFewerProps = (show) => {
//   const {
//     id, rocket_name, description, flickr_images,
//   } = show;
//   return {
//     id, rocket_name, description, flickr_images,
//   };
// };
// export const loadRockets = (payload) => ({
//   type: LOAD_ROCKETS,
//   payload,
// });

// export const reserveRockets = (payload) => ({
//   type: RESERVE_ROCKET,
//   payload,
// });

// export const cancelRockets = (payload) => ({
//   type: CANCEL_ROCKET,
//   payload,
// });

// https://coinlib.io/api/v1/coinlist?key=7aadada07bb3eee9&pref=USD&page=1&order=market_cap_desc

// export const fetchApiData = () => async (dispatch) => {
//   const res = await fetch('https://coinlib.io/api/v1/coinlist?key=7aadada07bb3eee9&pref=USD&page=1&order=market_cap_desc');
//   const data = await res.json();
//   // const rocketData = data.map(selectFewerProps);
//   dispatch(loadCoinData(data));
// };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};
export default reducer;
