interface SearchProps {
  onSearch?: React.FormEventHandler<HTMLFormElement>;
}

export default function Search({ onSearch }: SearchProps) {
  return (
    <form className="max-w-md mb-4" onSubmit={onSearch}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Tìm kiếm
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-2.5 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tìm kiếm..."
        />
        <button
          type="submit"
          className="cursor-pointer text-white absolute right-2.5 bottom-2.5 bg-main-500 hover:bg-main-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Tìm
        </button>
      </div>
    </form>
  );
}
