import React, { Component } from 'react';


class Board extends Component {
    state = {  } 
    constructor(props){
        super(props);
        this.state= {
            name: props.name,
            user: props.user,
            columns: ['a','n','b','test','asd']
        };
    }
    //WIP
    addColumn(props){

    }

    render() { 
        return (
            <h1>{this.state.columns.map((columns, key)=>{return (<h5>{this.state.columns[key]}</h5>);})}</h1>
        );
    }
}
 
export default Board;