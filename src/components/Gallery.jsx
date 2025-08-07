import React, { useEffect, useState } from 'react'
import '../gallery.css'
import axios from 'axios';
import Loading from './Loading';
import Masonry from 'react-masonry-css'


const Gallery = ({ name }) => {

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const [pageLimit, setPageLimit] = useState(1)
    const [searchText, setsearchText] = useState('')


    const client_id = 'oo1PSNlkZtlYC4FL8iRdMyZqL7oe-HZaXD5DNtHgQFU'
    const url = `https://api.unsplash.com/search/photos`;

    const fetchData = async (query, page) => {
        setLoading(true);
        const options = {
            params: {
                client_id: client_id,
                client_secret: 'WwgxwF4mu1OdbGX28ConcCDG2vYuMNyTlyS7bBigBfY',
                query: query ? query : 'car',
                count: 30,
                page: page
            },

        };
        try {
            const response = await axios.get(url, options);
            setData(response.data.results);
            setLoading(false);
            setPageLimit(response.data.total_pages)
            setsearchText(query)


        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };


    const searchHandler = () => {
        if (!query.trim()) {
            alert("Please enter something to search");

        } else {
            setPage(1)
            fetchData(query, page);
        }

    }

    const NextHandler = () => {
        if (page < pageLimit) {
            setPage(pre => pre + 1)
        }

        fetchData(searchText, page)
    }

    const previousHandler = () => {
        if (page > 1) {
            setPage(pre => pre - 1)
        }
        fetchData(searchText, page)
    }

    useEffect(() => {
        setLoading(true)
        fetchData(query, 1);
    }, [])


console.log(page);




    return (
        <div style={{ minHeight: "100vh" }}>
            <h1 className='title'>{name}</h1>
            <div className='search-container'>
                <input type="search" className='search' onChange={(e) => setQuery(e.target.value)} value={query} placeholder='Search Images...' />
                <button className='button' onClick={() => searchHandler()}>Search</button>
            </div>
            {searchText && <h1 style={{marginLeft : '50px'}}>{searchText};</h1>} 
            <div className='gallery-container'>
                <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
                    {loading && <Loading />}
                    {data && data.map((item, i) => {
                        return (
                            <img
                                src={item.links.download}
                                key={i}
                                alt="gallery"
                                className="gallery-img"
                            />
                        )
                    })}
                </Masonry>
            </div>
            <div style={{ textAlign: "center", }}>
                <button disabled={page == 1} className='button' onClick={() => previousHandler()}>Previous Page</button>
                <button className='button' onClick={() => NextHandler()}>Next Page</button>
            </div>
        </div>
    )
}

export default Gallery