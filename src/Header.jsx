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

    fetchGlobals(){
    }
    
    render() { 
        return (
            <div>
                <div className='Header'>
                    <h1>Trelllo</h1>
                    <div className='ButtonsDiv'>
                        <Popup modal trigger={<button>Boards</button>}>
                            <div className='Popup'>
                            <label>{}</label>
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