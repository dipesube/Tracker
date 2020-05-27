import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const getData = async () =>{
    try { //if fetch is successful
        
        const attempt = await axios.get(URL); //use library to make a request
        return attempt;
    } catch (error) { //if unsuccessful
        
    }
}