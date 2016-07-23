import React from 'react';
import { Link } from 'react-router';

export const NavBar = () =>
  <div>
    <ul>
      <li>
        <Link to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link to={"/contractors"}>
          Contractors
        </Link>
      </li>
      <li>
        <Link to={"/contractors/new"}>
          New
        </Link>
      </li>
    </ul>
  </div>;
