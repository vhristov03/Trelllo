import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Header extends Component {


    constructor(props){
        super(props);
        this.state = {
            user: '',
            boards: []
        }
    };

    addBoardButton(){
        if(this.state.user != ''){
            return(
                <button>Add Board</button>
                
            );
        }
    }
    
    render() { 
        return (
            <div>
                <div className='Header'>
                    <h1>Trelllo</h1>
                    <div className='ButtonsDiv'>
                        <Popup modal trigger={<button>Boards</button>}>
                            <div className='Popup'>
                            {this.addBoardButton()}
                            </div>
                        </Popup> 
                        <button>Log in</button>
                    </div>
                </div>
                <hr></hr>
            </div>
            
        );
    }
}
 
export default Header;