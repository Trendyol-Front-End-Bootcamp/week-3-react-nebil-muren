import React, { useMemo } from "react";
import { keyGenerator } from "utils/commonUtils";

const Pagination = ({ active, total = 0, dataPerPage = 1, onChange }) => {
  const pageCount = useMemo(
    () => Math.ceil(total / Math.max(1, dataPerPage)),
    [total, dataPerPage]
  );

  const handlePageChange = (event) => {
    onChange(Number.parseInt(event.target.innerText));
  };

  return (
    <div className="custom-pagination">
      {pageCount &&
        [...Array(pageCount).keys()].map((page) => (
          <button
            type="button"
            className="mb-3"
            onClick={handlePageChange}
            key={keyGenerator()}
          >
            <span
              className={
                active === page + 1 ? "custom-pagination-active" : "text-muted"
              }
              name={page + 1}
            >
              {page + 1}
            </span>
          </button>
        ))}
    </div>
  );
};

export default Pagination;
