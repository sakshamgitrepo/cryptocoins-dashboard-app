import React, { useState } from 'react'
import CoinSearch from '../components/CoinSearch'
import Pagination from '../components/Pagination';
import Trending from '../components/Trending'

function Home({coins}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  
  const lastPostIndex = currentPage * coinsPerPage;
  const firstPostIndex = lastPostIndex - coinsPerPage;
  const currentCoins = coins.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
        <CoinSearch coins={currentCoins}/>
        <Pagination
                totalCoins={coins.length}
                coinsPerPage={coinsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        <Trending/>
    </div>
  )
}

export default Home