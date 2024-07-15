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
    } else if (type === 'lastpage') {
      setPage(500);
      return;
    } else if (type === 'firstpage') {
      setPage(1);
      return;
    }else {
      setPage((prevState) => prevState - 1)
      return;
    }
  }

  return (
    <div className='flex justify-center items-center py-4 px-2 gap-4 text-color-white text-2xl'>
      {page === 1 ? null :
        <div className='flex flex-row'>
          <div className='gap-4 justify-between items-center p-4'>
            <button className='transition-all hover:text-color-accent' onClick={() => handlePage('firstpage')}>
              {'<< First Page'}
            </button>
          </div>
          <div className='gap-4 justify-between items-center p-4'>
            <button className='transition-all hover:text-color-accent' onClick={() => handlePage('prev')}>
              Previous
            </button>
          </div>
        </div>
      }
      <p>{page} of 500</p>
      {page === 500 ? null :
        <div className='flex flex-row'>
          <div className='gap-4 justify-between items-center p-4'>
            <button className='transition-all hover:text-color-accent' onClick={() => handlePage('next')}>
              Next
            </button>
          </div>
          <div className='gap-4 justify-between items-center p-4'>
            <button className='transition-all hover:text-color-accent' onClick={() => handlePage('lastpage')}>
              {'Last Page >>'}
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default Pagination;