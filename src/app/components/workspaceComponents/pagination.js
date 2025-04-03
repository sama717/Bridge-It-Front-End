"use client";
import { Pagination } from 'react-bootstrap';
import './css/pagination.css';  // Ensure the path is correct

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className="justify-content-center mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
          className={`custom-pagination-item ${page === currentPage ? 'active' : ''}`}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default CustomPagination;
