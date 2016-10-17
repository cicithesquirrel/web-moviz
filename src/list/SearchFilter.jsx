import React, {Component} from 'react';

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        // We need binding to be able to use 'this' in the callback
        this.onChange = this._onChange.bind(this)
    }

    _onChange(e) {
        // Forward the change event after extracting the filter value
        this.props.onChange(e.target.value);
    }
  
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{(this.props.label?this.props.label:'Filter:')}</label>
                <input onChange={this.onChange} type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default SearchFilter;