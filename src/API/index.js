import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const getData = async () =>{
    try { //if fetch is successful
        
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(URL); //use library to make a request
        const parsedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return parsedData;
    } catch (error) { //if unsuccessful
        
    }
}