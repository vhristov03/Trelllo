import React, { Component } from 'react';


class Board extends Component {
    state = {  } 
    constructor(props){
        super(props);
        this.state= {
            name: props.name,
            user: props.user,
            columns: ['a','n','b','test','asd'],
            archived: []
        };
    }
    //WIP
    addColumn(props){

    }

    render() { 
        return (
            <h1>{this.state.name}</h1>

        );
    }
}
 
export default Board;