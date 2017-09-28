import axios from 'axios';
import {url} from './config';
let getHomelist = (page)=>{
    return axios.get(`${url}homelist?page=${page}`)
}
export {getHomelist}