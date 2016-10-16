import React, {Component} from 'react';

class SortList extends Component {
    constructor(props) {
        super();
        this.props = props;
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
                <select onChange={this.onChange} className="form-control" id={this.props.id}>
                    <option value="title">Title</option>
                    <option value="year">Year</option>
                </select>
            </div>
        );
    }
}

export default SortList;