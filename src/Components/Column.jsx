import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Card from './Card'

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            cards: props.cards
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleAddCard = this.handleAddCard.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.title.value});
    }

    handleAddCard(event) {
        let prop = {title: event.title.value, desc: event.value.desc, author: event.value.author}
        let card = React.createElement(Card, prop, null);
        this.cards.push(card);
    }

    render() {
        return (<div className="js-column js-list list" id="column">
        <h2>{this.state.title}</h2>
        <div>
            {this.state.cards.map((card) => {return (<Card>card</Card>);})};
        </div>
        <div>
            <Popup nested trigger={<button>Create New Card</button>}>
                <div className='Edit'>
                    <label>New Description:</label>
                    <form onSubmit={this.handleAddCard}>
                        <textarea id="add-card-title"></textarea>
                        <textarea id="add-card-desc"></textarea>
                        <textarea id="add-card-author"></textarea>
                    </form>                 
                </div>
            </Popup>
        </div>
        </div>)
    }
}

export default Column;