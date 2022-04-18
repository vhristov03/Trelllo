import React, { Component } from 'react';
import Column from './Column';
import Popup from 'reactjs-popup';

class Board extends Component {
    state = {  } 
    constructor(props){
        super(props);
        this.state= {
            name: props.name,
            user: props.user,
            columns: props.columns,
            archived: []
        };
    }

    addColumn(props) {
        
    }

    render() { 
        return (
            // <h1>{this.state.columns.map((columns, key)=>{return (<h5>{this.state.columns[key]}</h5>);})}</h1>
            <div>
                <div>
                    {this.state.columns.map((column) => {return (<Column>Column</Column>);})};
                </div>
                <div>
                    <Popup nested trigger={<button>Create New Column</button>}>
                        <div className='Edit'>
                            <label>New Column:</label>
                            <form onSubmit={this.handleAddCard}>
                                <textarea value={title}></textarea>
                            </form>                 
                        </div>
                    </Popup>
                </div>
            </div>
        );
    }
}
 
export default Board;