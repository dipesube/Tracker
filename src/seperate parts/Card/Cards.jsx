import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Card.module.css';

const Cards = () => {
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
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REALTIME DATA</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
            
            </Grid>    
        
        </div>
    )
}

export default Cards;