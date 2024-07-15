import React from 'react'

const Pagination = ({ page, setPage }) => {
  const scrollTop = () => {
    scrollTo({ behavior: 'smooth', top: 0 })
  }

  const handlePage = (type) => {
    scrollTop();
    if (type === 'next') {
      setPage((prevState) => prevState + 1)
      return;
    } else {
      setPage((prevState) => prevState - 1)
      return;
    }
  }

  return (
    <div className='flex justify-center items-center py-4 px-2 gap-4 text-color-white text-2xl'>{
      page === 1 ? null :
      <button className='transition-all hover:text-color-accent' onClick={() => handlePage('prev')}>
        Prev
      </button>
    }
      <p>{page} of 500</p>
      <button className='transition-all hover:text-color-accent' onClick={() => handlePage('next')}>
        Next
      </button>
    </div>
  )
}

export default Pagination;