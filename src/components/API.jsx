import axios from "axios";

export function getData(id){
    return axios.get("https://dummyjson.com/products/" + id);
}


export function getDataList(){
    return axios.get("https://dummyjson.com/products");
}