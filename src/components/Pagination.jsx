import React from 'react'

const Pagination = ({
    totalCoins,
    coinsPerPage,
    setCurrentPage,
    currentPage,}) => {
       
        let pages = [];

        for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
            pages.push(i);
        }
    
  return (
        <div className='pagination  '>
            {pages.map((page, index) => {
                return (
                    <button 
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active rounded-div dark  " : " light rounded-div"}>
                        {page}
                    </button>
                );
            })}
        </div>
  )

}

export default Pagination