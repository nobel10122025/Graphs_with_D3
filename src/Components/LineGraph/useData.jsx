import { useEffect, useState } from 'react';
import {json} from 'd3';

const APIkey = "b190a0605344cc4f3af08d0dd473dd25"; 
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,daily&appid=${APIkey}`;

export function useData() {

    const [data , setData] = useState(null)

    useEffect(()=>{

        json(url).then(setData);
    },[])
    // console.log(data)
    return data
}

