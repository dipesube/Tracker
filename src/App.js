import React from 'react';

import Cards from './seperate parts/Card/Cards';
import Chart from './seperate parts/Chart/Chart';
import Country from './seperate parts/Country/Country';

import styles from './App.module.css';

class App extends React.Component{
    render() {
        return (
            <div className= {styles.container}> 
                <Cards />
                <Chart />
                <Country />
            </div>
        )
    }
}
export default App;