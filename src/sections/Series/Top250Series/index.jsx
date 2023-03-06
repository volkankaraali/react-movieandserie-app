// libraries
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';

// componenets
import Card from '../../../components/Card';
import Page from '../../../components/Page';

// hooks
import usePagination from '../../../hooks/usePagination';

function Top250Series() {

    const { top250Series } = useSelector(state => state.series);

    const [data, setData] = useState();
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { currentPosts, totalPages } = usePagination(top250Series, currentPage, postPerPage);
        setData(currentPosts);
        setPages(totalPages)
    }, [postPerPage, currentPage, top250Series]);

    const handlePageChange = (event, value) => setCurrentPage(value);

    return (
        <Page title='Series | Top 250 '>
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

export default Top250Series
