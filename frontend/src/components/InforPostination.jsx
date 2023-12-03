import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/InforPostination.css';

function InforPostination({
  inforItemsPerPage,
  inforTotalItems,
  paginate,
  currentInforPage,
}) {
  const totalPages = Math.ceil(inforTotalItems / inforItemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <nav>
      <ul className="postination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentInforPage === number ? 'active' : ''}
          >
            <button
              onClick={() => paginate(number)}
              className="post-link"
              style={{ cursor: 'pointer' }}
              type="button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

InforPostination.propTypes = {
  inforItemsPerPage: PropTypes.number.isRequired,
  inforTotalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentInforPage: PropTypes.number.isRequired,
};

export default InforPostination;
