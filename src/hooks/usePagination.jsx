
function usePagination(data, currentPage, postPerPage) {

  console.log(data)
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = data?.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data?.length / postPerPage);

  return {
    currentPosts,
    totalPages
  };
}

export default usePagination;