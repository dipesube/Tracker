import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const getData = async () =>{
    try { //if fetch is successful
        
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(URL); //use library to make a request

        return {confirmed,
            recovered,
            deaths,
            lastUpdate};
    } catch (error) { //if unsuccessful
        
    }
}

export const fetchDailyData = async () => {
    try{
        const {response} = await axios.get(`${URL}/daily`);
        return response.map(({ confirmed, deaths, date}) => ({confirmed: confirmed.total, deaths: deaths.total, date}));
    } catch(error){
        return error;
    }
}