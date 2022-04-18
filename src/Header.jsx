import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Board from './Components/Board';
import Card from './Components/Card';

class Header extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            user: '',
            boards: [],
            counter: 0
        }

        this.login = this.login.bind(this);
        this.createBoard = this.createBoard.bind(this);
        let a = {name:'asd',user:'asd'}
        this.state.boards.push(a);
        
    };

    renderBoards(){ 
        console.log(this.state.boards);    
        }

    showBoardsButton(){
        if(this.state.user != ''){
            return(
                <Popup nested trigger={<button>Boards</button>}>
                        <div className='Boards'>
                            <Popup nested trigger={<button>Add Board</button>}>
                                <div className='AddBoard'>
                                    <form onSubmit={this.createBoard}>
                                        <label>Name: </label>
                                        <input type='text' name='name' id='name'/>
                                        <input type='submit'/>
                                    </form>
                                </div>
                            </Popup>
                            {this.renderBoards()}
                        </div>
                </Popup>
            );
        }
    }

    createBoard(event){
        event.preventDefault();
        let props = {
            name: event.target.elements.name.value,
            user: this.state.user                     
        }
        let newboard = new Board(props);
        this.state.boards.push(newboard);
        console.log('1');
        {this.renderBoards()}
    }



    showLoginButton(){
        if(this.state.user==''){
            return(
                <Popup modal trigger={<button>Login</button>}>
                        <div className='Popup'>
                            <form onSubmit={this.login}>
                                <label>Username: <input type='text' id='username' name='username'/></label>
                                <input type='submit'/>
                            </form>
                        </div>
                </Popup> 
            );
        }
    }

    login(event){
        event.preventDefault();
        this.setState({user: event.target.elements.username.value});
        console.log(event.target.elements.username.value);
    }

    
    
    render() { 
        return (
            <div>
                <div className='Header'>
                    <h1>Trelllo</h1>
                    <div className='ButtonsDiv'>
                        {this.showBoardsButton()}
                        {this.showLoginButton()}
                    </div>
                </div>
                <hr></hr>
            </div>
            
        );
    }
}
 
export default Header;