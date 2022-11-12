import React, { useEffect } from "react";
import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

interface Props {
  pagesNumber: number;
  selectedPage: number | undefined;
}

const Paginator = ({ pagesNumber = 0, selectedPage = 1 }: Props) => {
  const [currentPage, setCurrentPage] = useState(selectedPage);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const generatePages = (): number[] => {
    let pages = [currentPage];
    for (let i = 1; i <= pagesNumber && pages.length <= 4; i++) {
      if (currentPage - i > 0) {
        pages = [currentPage - i, ...pages];
      }
      if (currentPage + i <= pagesNumber) {
        pages = [...pages, currentPage + i];
      }
    }
    return pages;
  };
  const moveLeft = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const moveRight = () => {
    if (currentPage < pagesNumber) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setVisiblePages(generatePages());
  }, [currentPage]);

  return pagesNumber ? (
    <div className="flex flex-wrap justify-center items-center mt-5 mb-1 select-none">
      <div className="w-11">
        {pagesNumber > 4 && currentPage > 1 && (
          <MdArrowLeft size={45} onClick={moveLeft} className="cursor-pointer" />
        )}
      </div>
      {visiblePages.map((pageNumber: number) => (
        <div key={pageNumber}>
          <div
            className={`flex justify-center items-center w-14 h-14 bg-dark-90 cursor-pointer m-4 ${
              pageNumber === currentPage ? "w-14 h-14 border-2 border-blue-1 rounded p-1 cursor-default" : ""
            }`}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber}
          </div>
        </div>
      ))}
      <div className="w-11">
        {pagesNumber > 4 && currentPage < pagesNumber && (
          <MdArrowRight size={45} onClick={moveRight} className="cursor-pointer" />
        )}
      </div>
    </div>
  ) : null;
};

export default Paginator;
