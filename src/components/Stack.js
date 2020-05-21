import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "./Card";

class Stack extends Component {
    render() {
        const { title, cards } = this.props.stack;
        return (
            <div>
                <Link to='/'><h4 className='link-home'>Home</h4></Link>
                <h2>{title}</h2>
                <br/>
                {cards.map(card => {
                    return (
                        <Card key={card.id} card={card}/>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stack: state.stack
    }
}

Stack.propTypes = {
    stack: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        cards: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            prompt: PropTypes.string,
            answer: PropTypes.string
        }))
    })
};

export default connect(mapStateToProps, null)(Stack)