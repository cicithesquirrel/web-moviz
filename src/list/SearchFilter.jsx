import React, { Component } from 'react';
import "./SearchFilter.css";

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        // We need binding to be able to use 'this' in the callback
        this.onChange = this._onChange.bind(this);
        this.onClear = this._onClear.bind(this);
        this.setFilterTextAndTriggerChange = this._setFilterTextAndTriggerChange.bind(this);
        this.state = {
            value: this.props.value
        };
    }

    _setFilterTextAndTriggerChange(text) {
        this.setState({
            value: text
        });
        this.props.onChange(text);
    }

    _onChange(e) {
        // Forward the change event after extracting the filter value
        this._setFilterTextAndTriggerChange(e.target.value);
    }

    _onClear(e) {
        this._setFilterTextAndTriggerChange('');
    }

    render() {
        var label = (this.props.label ? this.props.label : 'Filter:');
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{label}</label>
                <div className="input-group">
                    <input ref={(ref) => this.inputText = ref} onChange={this.onChange} type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder} value={this.state.value} />
                    <span className="input-group-btn">
                        <button onClick={this.onClear} id="SearchFilterClearButton" className="btn btn-default" type="button">
                            <i className="fa fa-times"></i>
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default SearchFilter;