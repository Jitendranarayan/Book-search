// src/components/Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ totalRecords, recordsPerPage, currentPage, setCurrentPage, setRecordsPerPage }) => {
  const pageCount = Math.ceil(totalRecords / recordsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleRecordsPerPageChange = (e) => {
    setRecordsPerPage(Number(e.target.value));
  };

  return (
    <div className="pagination-container">
      <select value={recordsPerPage} onChange={handleRecordsPerPageChange}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;
