import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../API';
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    
    const [dailyData, setDailyData] = useState({});
    
    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
        };

        fetchAPI();
    }, []);

    
    const lineChart = (
        dailyData[0]? (
            <Line 
            data = {{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map((data) => data.confirmed.value),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(( data ) => data.deaths.value),
                    label: 'Deaths',
                    borderColor: '#3333ff',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                },
            ],
            }}
            />
            ) : null
    );
    return (
        <div className={styles.container} >
            {lineChart}    
        </div>
    )
}

export default Chart;