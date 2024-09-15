import {useEffect, useState} from "react";
import axios from "axios";
const useFetch = (url)=>{
    const [data,setdata] = useState([])
    const [loading,setloading] = useState(false)
    const [error,seterror] = useState(false)


    useEffect(()=>{
        const FetchData = async ()=>{
            setloading(true)
            try{
                const res = await axios.get(url);
                setdata(res.data)
            }catch(err){
                seterror(err);
            }
            setloading(false)
        }
        FetchData();
    },[url])
    
    const reFetchData = async ()=>{
        setloading(true)
        try{
            const res = await axios.get(url);
            setdata(res.data)
        }catch(err){
            seterror(err);
        }
        setloading(false)
    };

    return {data,loading,error,reFetchData};
}

export default useFetch;