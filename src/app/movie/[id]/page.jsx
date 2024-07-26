"use client";
import React from 'react'
import { getMovieDetail, getMovieImages } from '@/helpers/helpers';
import { useRouter } from 'next/navigation';
import { useRef, useState } from "react";
import { Star } from '@phosphor-icons/react';
import ImageSlider from '@/components/ImageSlider';

const page = async ({ params: { id } }) => {
    const movie = await getMovieDetail(id);
    const movieImages = await getMovieImages(id);
    const fixedMovieImages = movieImages.backdrops.slice(1,6);
    const yearRelease = movie.release_date.split('-')[0];
    const movieRating = movie.vote_average.toFixed(1);

    const handleBack = () => {
        window.history.back();
    }

    return (
        <>
            <div className='relative'>
                {/* Backdrop Image */}
                <div
                    className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-cover'
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_POSTER_API}${movie.backdrop_path}), linear-gradient(to bottom, transparent, black)`,
                        backgroundBlendMode: 'overlay',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        // filter: 'brightness(50%)'
                    }}
                ></div>


                {/* Card */}
                <div className='flex justify-center h-full'>
                    <div className='relative w-full sm:w-2/3 mt-32 mb-16 items-center pt-16 px-4 flex flex-col sm:flex-row gap-4 text-color-white rounded-lg shadow-lg bg-dark bg-opacity-100 backdrop-blur-lg'>
                        {/* Back Button */}
                        <button className='absolute top-4 left-4 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full hover:text-color-accent transition-all'
                            onClick={handleBack}
                        >  &larr; Back
                        </button>

                        <img
                            src={`${process.env.NEXT_PUBLIC_POSTER_API}${movie.poster_path}`}
                            alt="..."
                            width={250}
                            height={250}
                            className="rounded-lg object-cover"
                        />
                        <div className='p-4 ml-0 sm:ml-12'>
                            <h3 className='text-2xl mb-10'>
                                {movie.original_title} - {yearRelease}
                                <p className="text-lg italic">"{movie.tagline}"</p>
                            </h3>
                            <p className='text-justify text-xl'>{movie.overview}</p>
                            <div className='pt-4 flex gap-4'>
                                <div className='w-36 flex flex-col justify-center items-center rounded border border-white p-2'>
                                    <h3>IMDB Rating:</h3>
                                    <div className='flex flex-row justify-center items-center'>
                                        <h3 className='mr-1'>{movieRating}/10</h3>
                                        <Star size={18} color='yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className='w-36 flex flex-col justify-center items-center rounded border border-white p-2'>
                                    <h3>Duration:</h3>
                                    <h3>{movie.runtime} Minutes</h3>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-semibold">Genres:</h2>
                                <ul className='flex flex-row'>
                                    {movie.genres.map((genre, index) => (
                                        <li key={genre.id} className='text-lg gap-1 mr-1'>
                                            {genre.name}{index < movie.genres.length - 1 && ' |'}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                            <h2 className="text-2xl font-semibold">Extras:</h2>
                               <ul className='flex flex-row'>
                                {fixedMovieImages.map((item, index) => ( 
                                    <li key={index} className='mr-2 mt-1'>
                                        <img src={`${process.env.NEXT_PUBLIC_POSTER_API}${item.file_path}`}/>
                                    </li>
                                ))
                                }
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default page;