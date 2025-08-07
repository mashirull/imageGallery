import React, { useEffect, useState } from 'react'
import '../app.css'
import useGetdata from '../hooks/useGetData'


const Gallery = ({name}) => {

    const [query, setQuery] = useState('');
    const {data} = useGetdata('https://real-time-image-search.p.rapidapi.com/search' )

    
  return (
    <div>
        <h1 className='title'>{name}</h1>
        <div className='search-container'>
            <input type="search"  className='search' onChange={(e)=> setQuery(e.target.value)} value={query} placeholder='Search Images...'/>
            <button className='button' >Search</button>
        </div>
    <div className='gallery-grid'>
        { data && data.map((item ,i) => {
            return (
                <img 
                src= {item.thumbnail_url} 
                key={i}
                alt="gallery" 
                height={item.height}  
                width={item.width}
                className="gallery-img"
                />
            )
        })}
    </div>
    </div>
  )
}

export default Gallery