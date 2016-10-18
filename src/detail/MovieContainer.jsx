import React, {Component} from 'react';
import DataProvider from '../data/DataProvider';
import Breadcrumb from '../Breadcrumb';
import Movie from './Movie';

class MovieContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            loaded: false
        };
    }

    componentDidMount() {
        let that = this;
        DataProvider.getMovie(this.props.params.id, function(m) {
            that.setState({
                movie: m,
                loaded: true
            });
        });
    }
  
    render() {
        if (!this.state.loaded) {
            return <div>Waiting...</div>
        }

        return (
            <div>
                <Breadcrumb crumbs={[{label:'Movies',link:'/'}, {label:this.state.movie.title}]} />
                <Movie movie={this.state.movie} />
            </div>
        );
    }
}

export default MovieContainer;