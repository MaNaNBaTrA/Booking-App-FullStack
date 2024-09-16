import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error before fetching
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err) {
                console.error('Error fetching data:', err.response?.data || err.message); // Log detailed error
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const reFetchData = async () => {
        setLoading(true);
        setError(null); // Reset error before fetching
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            console.error('Error re-fetching data:', err.response?.data || err.message); // Log detailed error
            setError(err);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetchData };
};

export default useFetch;
