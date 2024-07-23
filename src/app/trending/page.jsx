"use client"

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { api_key, getPopularMovies } from '@/helpers/helpers';
import CardList from '@/components/CardList';

const page = () => {
  const [page,setPage] = useState(1);
  const [popularMovies,setPopularMovie] = useState([]);

  const fetchData = async () => {
    const popularResponse = await getPopularMovies(page);
    setPopularMovie(popularResponse);
  }

  useEffect(() => {
    fetchData();
  },[page]);
  

  return (
    <>
    <HeaderMenu title={`Trending Movies #${page}`}/>
    <CardList api={popularMovies} maksData={20} />
    <Pagination page={page} setPage={setPage}/>
    </>
  )
}

export default page;
