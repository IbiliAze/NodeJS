///////////////////////////////////////////////////////////////////////////////////MODULES
import React from 'react';         
import { connect } from 'react-redux';                                                     
////////////////////////////////////////////////////////////////////////////////COMPONENTS
import NodesList from '../nodes/NodesList';                                             
import NodesListFilters from '../nodes/NodesListFilters';
import NodesForm from '../nodes/NodesForm';                               
///////////////////////////////////////////////////////////////////////////////////ACTIONS
import { postNode } from '../../actions/nodes';
//////////////////////////////////////////////////////////////////////////////////////////




const NodesPage = (props) => (
    <div>
        <NodesForm 
            onSubmit={(node) => {
                props.dispatch(postNode( node ));
            }}
        />
        <br />

        <NodesListFilters />
        <br />
        <NodesList />
    </div>
);


export default connect()(NodesPage);