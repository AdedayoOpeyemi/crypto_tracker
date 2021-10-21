import { useState } from 'react';
import { useSelector } from 'react-redux';

import worldImg from '../img/world.png';

function Home() {
  const [filter, setFilter] = useState('');
  const countries = useSelector((state) => state.countries);

  return (
    <div className="d-flex flex-column m-0 p-0 light-magenta">
      <div className="d-flex flex-row justify-content-center align-items-center p-0 m-0">
        <img alt="" src={worldImg} className="world-img m-0" />
        <div>
          <h1 className="m-0 text-white fw-bold">World</h1>
        </div>
      </div>
      <div className="col-12 p-2 m-0 intense-magenta">
        <Filter setFilter={setFilter} />
      </div>
      <p className="col-12 light-magenta my-0 text-white text-center">Infected by Country:</p>
    </div>
  );
}
export default Home;