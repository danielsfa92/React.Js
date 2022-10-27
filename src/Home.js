import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Main Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;