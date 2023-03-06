// libraries
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';

// components
import Card from '../../components/Card';
import Page from '../../components/Page';

// hooks
import usePagination from '../../hooks/usePagination';

function ComingSoon() {

    const { comingSoonMovies } = useSelector(state => state.movies);

    const [data, setData] = useState();
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { currentPosts, totalPages } = usePagination(comingSoonMovies, currentPage, postPerPage);
        setData(currentPosts);
        setPages(totalPages)
    }, [postPerPage, currentPage, comingSoonMovies]);


    const handlePageChange = (event, value) => setCurrentPage(value);

    return (
        <Page title='Coming Soon '>
            <div className='most-popular-movies dark:bg-gray-800'>
                <div className='container mx-auto px-4 py-5 font-bold text-xl text-yellow-500'>Coming Soon</div>
                <div className='container pt-5 mx-auto grid grid-cols-1 place-items-center gap-1 lg:gap-3 sm:grid-cols-3 lg:grid-cols-5'>
                    {
                        data?.map(item => <Card key={item.id} item={item} />)
                    }
                </div>
                <div className='pagination flex justify-center py-10'>
                    <Pagination size='small' color='primary' count={pages} page={currentPage} onChange={handlePageChange} />
                </div>
            </div>
        </Page>
    )
}

export default ComingSoon
