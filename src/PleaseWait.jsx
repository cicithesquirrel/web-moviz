import React from 'react';
import "./Generic.css";

const PleaseWait = ({crumbs}) => (
    <div className="Generic-message"><i className="fa fa-spinner fa-pulse fa-fw"></i> Please wait...</div>
);

export default PleaseWait;