import React, {Component} from 'react';
import DataProvider from '../data/DataProvider';
import {Doughnut} from 'react-chartjs-2';

const backgroundColors = ['#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F', '#F15854', '#4D4D4D'];
const hoverBackgroundColors = backgroundColors;

class StatsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            countByCountry: undefined
        };
    }

    componentDidMount() {
        let that = this;
        DataProvider.getStats(function(countByCountry) {
            that.setState({
                loaded: true,
                countByCountry: countByCountry
            });
        });
    }
  
    render() {
        if (!this.state.loaded) {
            return <div>Waiting...</div>
        }

        let countByCountry = this.state.countByCountry;
        let countries = Object.keys(countByCountry);

        let data = {
            labels: countries,
            datasets: [{
                data: countries.map((c)=>(countByCountry[c])),
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors
            }]
        };

        return (
            <section>
                <h2>Number of movies by country</h2>
                <Doughnut data={data} />
            </section>
        );
    }
}

export default StatsContainer;