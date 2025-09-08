import React from "react";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  page: number;
  totalPages: number;
  onClick: (page: number) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Pagination({
  page,
  totalPages,
  onClick,
}: PaginationProps) {
  return (
    <nav className="mt-4 mx-auto" aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        {page > 1 && (
          <li>
            <a
              href="#prev"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-main-600 hover:text-white"
              onClick={onClick(page - 1)}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
        )}

        {new Array(totalPages).fill(0).map((_, idx) => (
          <li>
            <a
              key={`page-${idx}`}
              href="#page"
              className={twMerge("flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-main-600 hover:text-white",
                page === idx + 1 && "dark:border-main-500 dark:bg-main-500 dark:text-white"
              )}
              onClick={page === idx + 1 ? undefined : onClick(idx + 1)}
              {...(page === idx + 1
                ? {
                    "aria-current": "page",
                  }
                : {})}
            >
              {idx + 1}
            </a>
          </li>
        ))}

        {page < totalPages && (
          <li>
            <a
              href="#next"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-main-600 hover:text-white"
              onClick={onClick(page + 1)}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
