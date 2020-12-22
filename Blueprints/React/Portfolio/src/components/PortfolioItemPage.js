import React from 'react';


const PortfolioItem = (props) => (
    <div>
        <h1>thing ive done</h1>
        <p>this is it: {props.match.params.id}</p>
    </div>
)


export default PortfolioItem;