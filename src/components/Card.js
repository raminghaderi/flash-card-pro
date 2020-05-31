import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            reveal: false
        };
    }
    render() {
        const { prompt, answer } = this.props.card;
        return (
            <div className='card' onClick={() => this.setState({reveal: !this.state.reveal})}>
                <div className='card-prompt'>
                    <h4>{prompt}</h4>
                </div>
                <div className={this.state.reveal ? 'reveal-answer' : 'hide-answer'}>
                    <h4>{answer}</h4>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number,
        prompt: PropTypes.string,
        answer: PropTypes.string
    })
};

export default Card;