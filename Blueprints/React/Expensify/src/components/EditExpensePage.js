import React from 'react';


const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            editing {props.match.params.id}
        </div>
    )
}


export default EditExpensePage;