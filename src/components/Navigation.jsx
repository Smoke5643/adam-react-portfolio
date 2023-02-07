import React from 'react';

function Navigation({ currentPage, handlePageChange, pages }) {
  return (
    <ul className="nav nav-tabs id='nav-bar' justify-content-center">
      {pages.map(page => (
        <li className="nav-item">
          <a
            href={`#${page.toLowerCase()}`}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'nav-link active' : 'nav-link'}
          >
            {page}
          </a>
      </li>
      ))}
    </ul>
  );
}

export default Navigation;