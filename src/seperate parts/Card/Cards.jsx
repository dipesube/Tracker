import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Card.module.css';
import CountUp from 'react-countup';

//function that takes care of card using material ui's API
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed){
        return 'Loading...';
    }
    return (
        <div className="styles.container">
            <Grid 
                container
                justify='center'    
                spacing={3}
            >
                <Grid item component = {Card}> 
                    <CardContent> 
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                        <CountUp
                            start = {0}
                            end = {confirmed.value}
                            duration = {2.5}
                            seperator = ","
                        />
                        </Typography>
                        
                        <Typography color="textSecondary">REALTIME </Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card}> 
                    <CardContent> 
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REALTIME DATA</Typography>
                        <Typography variant="body2">Number of recovered cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card}> 
                    <CardContent> 
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REALTIME DATA</Typography>
                        <Typography variant="body2">Number of total deaths</Typography>
                    </CardContent>
                </Grid>
            
            </Grid>    
        
        </div>
    )
}

export default Cards;