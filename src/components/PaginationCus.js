import React from 'react'
import Pagination from '@material-ui/lab/Pagination'

function PaginationCus({func,postsPerPage,totalPosts}) {

    let count = Math.ceil(totalPosts / postsPerPage);
    return (
        <div>
            <Pagination count={count} variant="outlined" color="primary" onChange={func} />
        </div>
    )
}

export default PaginationCus
