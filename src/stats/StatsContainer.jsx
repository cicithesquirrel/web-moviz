import React, {Component} from 'react';
import DataProvider from '../data/DataProvider';

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

        return (
            <div>
                {JSON.stringify(this.state.countByCountry)}
            </div>
        );
    }
}

export default StatsContainer;