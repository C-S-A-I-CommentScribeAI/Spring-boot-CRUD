import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/PostNation.css';

function PostNation({ itemsPerPage, totalItems, paginate, currentPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <nav>
      <ul className="postination">
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
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

PostNation.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PostNation;
