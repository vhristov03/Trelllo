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
        
    }

    handleChangeDesc(event){
        this.setState({desc: event.target.value});
    }

    handleChangeAuthor(event){
        this.setState({author: event.target.value});
    }

    render() {
        return (
            <Popup modal trigger={
            <div className='Card'>
                <h3>{this.state.title}</h3>   
            </div>}>
                <div className='Popup'>
                    <h1>{this.state.title}</h1>
                    <h4>By: {this.state.author}</h4>
                    <h4>Description:</h4>
                    <p>{this.state.desc}</p>
                    <h5>Created: {this.state.created.toLocaleString()}</h5>
                    
                    <div className='ButtonsDiv'>
                        <Popup modal trigger={<button>Edit Description</button>}>
                            <div className='Edit'>
                                <label>New Description:</label>
                                <form>

                                    <textarea value={this.state.desc} onChange={this.handleChangeDesc}></textarea>
                                </form>
                                    <button>Close</button>
                            </div>
                        </Popup>

                        <Popup modal trigger={<button>Author</button>}>
                            <div className='Edit'>
                                <label>New author:</label>
                                <form>
                                    <input type='text' value={this.state.author} onChange={this.handleChangeAuthor}/>
                                    <input type='submit'></input>
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