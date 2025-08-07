import axios from "axios"
import { useEffect, useState } from "react";




const useGetdata = (url , query ) => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                params: {
                    query:  query ? query : 'car',
                    limit: '20',
                    size  : 'large'

                },
                headers: {
                    'x-rapidapi-key': 'bd710eff4amsh74852d14fc8ececp199d2bjsn4b6122b021e9',
                    'x-rapidapi-host': 'real-time-image-search.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.get(url, options);
                setdata(response.data.data)
            } catch (error) {
                console.error(error);
            }


        }

        fetchData()
    }, [])


    return {
        data
    }
}

export default useGetdata;