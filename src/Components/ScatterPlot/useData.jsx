import {useState , useEffect} from 'react';
import { csv } from 'd3';

const csvUrl = "https://gist.githubusercontent.com/netj/8836201/raw/iris.csv"

export function useData() {

    const [data , setData] = useState(null)

    useEffect(()=>{
        const row = d => { 
        d["sepal.length"] = +(d["sepal.length"])
        d["sepal.width"] = +(d["sepal.width"])
        d["petal.length"] = +(d["petal.length"])
        d["petal.width"] = +(d["petal.width"])
        return d
        }
        csv(csvUrl , row).then(setData);
    },[])
    console.log(data)
    return data
}

