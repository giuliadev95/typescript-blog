import React, {useEffect} from "react";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,  
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    }

    const paginate = (pageNumber: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
    };

    // Scroll smoothly to the top of the page when opening new page
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center">
        <nav className="mt-4">
        <ul className="flex gap-2">
            {pageNumbers.map((number) => (
                <li key={number}>
                <a
                href="!#"
                onClick={(e) => paginate(number, e)}
                className={`px-3 py-1 border rounded ${
                    currentPage === number ? "bg-white text-black font-bold" : " text-white font-normal"
                    }`}
                    >
                {number}
                </a>
            </li>
            ))}
        </ul>
        </nav>
    </div>
  );
};
