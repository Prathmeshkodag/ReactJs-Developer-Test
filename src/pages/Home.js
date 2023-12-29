import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <ul>
       <h1>Click bellow link to vist task </h1>
         
        <li>
          <Link to="/frame">Frame</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
