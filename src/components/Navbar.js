import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMicrophone, FaCog, FaAngleLeft } from 'react-icons/fa';
// import { IoChevronBackOutline } from 'react-icons/io';
// import { IoMdSettings } from 'react-icons/io';
// import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <header className="shadow">
      <nav className="p-2 text-white primary-blue d-flex justify-content-between">
        <Link to="/" className="text-decoration-none text-white fw-bold d-flex align-items-center justify-content-center">
          { pathname !== '/'
            ? (
              <>
                <FaAngleLeft className="nav-icons" />
              </>
            )
            : ''}
        </Link>
        <h3 className="m-0 d-flex align-items-center p-1 justify-content-center">
          Cyrpto Tracker
        </h3>
        <div className="m-0 d-flex flex-row p-1">
          <FaMicrophone className="nav-icons" />
          <div className="mx-2" />
          <FaCog className="nav-icons" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
