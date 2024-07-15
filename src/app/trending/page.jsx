"use client"

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { api_key } from '@/helpers/helpers';
import CardList from '@/components/CardList';

const page = () => {
  const [page,setPage] = useState(1);
  const [popularMovies,setPopularMovie] = useState([]);

  const fetchData = async () => {
    const popularResponse = await fetch(
      `${process.env.NEXT_PUBLIC_URL_BASE}/movie/popular?language=en-US&page=${page}`,
      api_key
    );
    const data = await popularResponse.json();
    setPopularMovie(data.results);
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
