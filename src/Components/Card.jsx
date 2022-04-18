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

        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
        
    }

    handleChangeDesc(event){
        this.setState({desc: event.target.value});
    }

    handleChangeAuthor(event){
        this.setState({author: event.target.value});
    }

    handleChangeTitle(event){
        this.setState({title: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        
    }

    render() {
        return (
            <Popup nested trigger={
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
                        <Popup nested trigger={<button>Edit Description</button>}>
                            <div className='Edit'>
                                <label>New Description:</label>
                                <form onSubmit={this.handleSubmit}>
                                    <textarea value={this.state.desc} onChange={this.handleChangeDesc}></textarea>
                                </form>
                                    
                            </div>
                        </Popup>

                        <Popup nested trigger={<button>Change Author</button>}>
                            <div className='Edit'>
                                <label>New author:</label>
                                <form onSubmit={this.handleSubmit}>
                                    <input type='text' value={this.state.author} onChange={this.handleChangeAuthor}/>

                                </form>
                                    
                            </div>
                        </Popup>

                        <Popup nested trigger={<button>Change Title</button>}>
                            <div className='Edit'>
                                <label>New Title:</label>
                                <form onSubmit={this.handleSubmit}>
                                    <input type='text' value={this.state.title} onChange={this.handleChangeTitle}/>
                                </form>
                                    
                            </div>
                        </Popup>

                        <div className='VL'></div>
                        <button>Copy</button>
                        <button>Move to</button>
                        <div className='VL'></div>
                        <button >Archive</button>
                    </div>
                </div>
            </Popup>
        );
    }
}
 
export default Card;