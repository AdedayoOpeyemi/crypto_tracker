import {
  Route, Switch,
} from 'react-router-dom';
import Details from './components/CoinDetails';
// import Home from './components/HomePage';
import NavBar from './components/Navbar';
import CoinList from './components/CoinList';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/coin/:id">
            <Details />
            <p>This Coin</p>
          </Route>
          <Route path="/">
            <CoinList className="coinlist-holde" />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
