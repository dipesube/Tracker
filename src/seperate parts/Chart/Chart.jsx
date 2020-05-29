import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../API';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart/Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    

    return (
        <h1>Charts</h1>
    )
}

export default Chart;