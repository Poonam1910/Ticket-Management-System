import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
//import {nav} from "react-bootstrap";
//import Pagination  from 'react-bootstrap/Pagination'

const TablePagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
 
  
  //render(paginationBasic);
  
  return ( 
   // paginationBasic
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)} >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
   
  );
};

TablePagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default TablePagination;
