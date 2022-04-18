import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Card extends Component {
   
    constructor(props){
        super(props);
        this.state= {
            title: props.title,
            desc: props.desc,
            author: props.author,
            created: new Date()
        };
        
    }

    render() {
        return (
            <Popup modal trigger={
            <div className='Card'>
                <h3>{this.state.title}</h3>   
            </div>}
            >
                <div className='Popup'>
                    <h1>{this.state.title}</h1>
                    <h4>By: {this.state.author}</h4>
                    <h4>Description:</h4>
                    <p>{this.state.desc}</p>
                    <h5>Created: {this.state.created.toLocaleString()}</h5>
                    
                    <div className='ButtonsDiv'>
                        <button /*onClick={Edit}*/>Edit Description</button>  
                        <button>Author</button>
                        <div className='VL'></div>
                        <button>Copy</button>
                        <button>Move to</button>
                        <div className='VL'></div>
                        <button /*onClick={Edit}*/>Archive</button>
                    </div>
                </div>
            </Popup>
        );
    }
}
 
export default Card;