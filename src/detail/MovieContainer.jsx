import React, {Component} from 'react';
import DataProvider from '../data/DataProvider';
import Breadcrumb from '../Breadcrumb';
import Movie from './Movie';
import PleaseWait from '../PleaseWait';
import "../Generic.css";

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
            return <PleaseWait />;
        }

        if (!this.state.movie) {
            return (<div className="Generic-message">
                    <i className="fa fa-frown-o"></i>&nbsp;
                    Oops! Sorry, we could not find this movie...
                    <p className="Generic-mini-message">Please try again by clicking <a href="/">here</a>!</p>
                </div>);
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