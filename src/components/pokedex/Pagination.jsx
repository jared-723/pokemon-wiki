const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage, currentPage, darkmode}) => {
  const FIRST_PAGE = 1;
  
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevState) => {
      const newPage = prevState - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevState;
    });
  };

  const handleFirstPage = () => setCurrentPage(FIRST_PAGE);

  return (
    <ul className="flex justify-center justify-self-center gap-4 p-4 items-center mb-[50px] w-[80%]">
      {currentPage >=2 && <li onClick={handleFirstPage} className={`cursor-pointer py-2 px-1 font-bold rounded-[3px] text-xs transition-all ${darkmode ? 'bg-[#ffc125] hover:bg-[#ffd56b]' : 'bg-[#ff0000] hover:bg-[#ff5b5b]'}`}>{"<<"}</li>}
      {currentPage >=2 && <li onClick={handlePreviousPage} className={`cursor-pointer py-2 px-2 font-bold rounded-[3px] text-xs transition-all ${darkmode ? 'bg-[#ffc125] hover:bg-[#ffd56b]' : 'bg-[#ff0000] hover:bg-[#ff5b5b]'}`}>{"<"}</li>}
      {pagesInCurrentBlock.map((page) => (
        <li  className={`py-1 px-3 cursor-pointer rounded-[3px] transition-all ${currentPage === page ? "text-white bg-[#ff0000]" : "hover:bg-red-400"} ${darkmode ? 'text-white' : 'text-black'}`} key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </li>
      ))}
      <li onClick={handleNextPage} className={`cursor-pointer py-2 px-2 font-bold rounded-[3px] text-xs transition-all ${darkmode ? 'bg-[#ffc125] hover:bg-[#ffd56b]' : 'bg-[#ff0000] hover:bg-[#ff5b5b]'}`}>{">"}</li>
      <li onClick={handleLastPage} className={`cursor-pointer py-2 px-1 font-bold rounded-[3px] text-xs transition-all ${darkmode ? 'bg-[#ffc125] hover:bg-[#ffd56b]' : 'bg-[#ff0000] hover:bg-[#ff5b5b]'}`}>{">>"}</li>
    </ul>
  );
};
export default Pagination;
