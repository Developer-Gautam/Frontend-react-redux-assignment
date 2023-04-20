import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <header>
        <img src="https://www.innoloft.com/images/logo.svg" alt="Innoloft Logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Welcome to Innoloft Dashboard</h1>
    </div>
  );
};

export default Main;
