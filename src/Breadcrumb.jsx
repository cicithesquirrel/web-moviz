import React from 'react';

const Breadcrumb = ({crumbs}) => (
    <ol className="breadcrumb">
        {crumbs.map((c)=> (<li key={c.label}><a href={(c.link?c.link:'#')}>{c.label}</a></li>))}
    </ol>
);

export default Breadcrumb;