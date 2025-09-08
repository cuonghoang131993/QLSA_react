import React from "react";

export default function Loading() {
  return (
    <div className="container mx-auto flex items-center">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-80 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-72 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-64 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-80"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
