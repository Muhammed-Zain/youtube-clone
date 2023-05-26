import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/contextAPI'
import  Nav  from './Nav'
import VideoCard from './VideoCard'
import { fetchData } from '../utils/api';
import ReactPaginate from 'react-paginate';

const Home = () => {
  const { loading, searchResults, setSearchResults, setPage } = useContext(Context); 

  const handlePageClick = async (data) => {
    let currentPage = data.selected;
    console.log(currentPage);
    const paginateData = await setPaginate(currentPage);
  }

  const setPaginate = async(currentPage) => {
    fetchData(`page=${currentPage}`).then(({data}) => {
      setPage(currentPage);
      setSearchResults(data.posts);
   
    })
  }
  useEffect(() => {
    document.getElementById('root').classList.remove("custom-h");
  }, []);

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
        <Nav />
        <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
                { !loading && searchResults && searchResults?.map((item) => {
                  // console.log(item)
                  return (
                    <VideoCard
                      key={item?.postId}
                      video={item}
                    />
                  );
                })}
            </div>
            <div className='flex items-center justify-center mb-8'>

              <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName="md:relative md:inline-flex md:items-center md:px-4 md:py-2 md:text-sm md:font-semibold md:text-white md:ring-1 md:ring-gray-500/50 focus:outline-offset-0 md:bg-white/[0.2] hover:bg-white/[0.15] md:rounded md:mx-[2px]"
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={'isolate inline-flex -space-x-px shadow-sm '}
                activeClassName={'bg-white/[0.2]'}
                onPageChange={handlePageClick}
                pageLinkClassName="md:relative md:inline-flex md:items-center md:px-4 md:py-2 md:rounded md:text-sm md:font-semibold md:text-white md:ring-1  ring-transparent ring-grey-300/10 md:hover:bg-white/[0.15] md:focus:z-20 md:focus:outline-offset-0 md:bg-white/[0.2] hidden md:mx-[1px]"
                previousClassName="relative inline-flex items-center px-4 py-2 rounded text-sm font-semibold text-white ring-1 ring-gray-300/10 hover:bg-white/[0.15] focus:z-20 focus:outline-offset-0 bg-white/[0.2] mx-5"
                nextLinkClassName="relative inline-flex items-center px-4 py-2 rounded text-sm font-semibold text-white ring-1 ring-gray-300/10   focus:z-20 focus:outline-offset-0 hover:bg-white/[0.15] bg-white/[0.2] mx-5 md:mr-[250px]"
              />
            </div>
        </div>
    </div>
  );
};

export default Home;