// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      <Link to="/">
        <button>

        Main
        </button>
        </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <button key={name}>{name}</button>
        ) : (
          <Link key={name} to={routeTo}>
            <button>
            {name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
