// libraries
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';

// components
import Card from '../../../components/Card';
import Page from '../../../components/Page';

// hooks
import usePagination from '../../../hooks/usePagination';

function MostPopularMovies() {

    const { mostPopularMovies } = useSelector(state => state.movies);

    const [data, setData] = useState();
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { currentPosts, totalPages } = usePagination(mostPopularMovies, currentPage, postPerPage);
        setData(currentPosts);
        setPages(totalPages)
    }, [postPerPage, currentPage, mostPopularMovies]);


    const handlePageChange = (event, value) => setCurrentPage(value);

    return (
        <Page title='Movies | Most Popular '>
            <div className='most-popular-movies'>
                <div className='container mt-10 mx-auto grid grid-cols-1 place-items-center gap-1 lg:gap-3 sm:grid-cols-3 lg:grid-cols-5'>
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

export default MostPopularMovies
