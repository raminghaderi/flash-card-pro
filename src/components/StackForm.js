import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addStack } from "../actions";

class StackForm extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            cards: []
        }
    }

    onAddCard() {
        const { cards } = this.state;

        cards.push({ id: cards.length, prompt: '', answer: '' });

        this.setState({ cards })
    }

    onTitleChange(title) {
        this.setState({ title })
    }

    onCardChange(index, value, part) {
        const { cards } = this.state;

        cards[index][part] = value;

        this.setState({ cards })
    }

    onSave() {
        this.props.addStack(this.state);
    }

    render() {
        return (
            <div>
                <Link to='/'><h4 className='link-home'>Home</h4></Link>
                <h4>Create a New Stack</h4>
                <Form>
                    <FormGroup>
                        <FormLabel>Title:</FormLabel>
                        {' '}
                        <FormControl onChange={(event) => this.onTitleChange(event.target.value)}/>
                    </FormGroup>
                    {this.state.cards.map((card, index) => {
                        return (
                            <div key={card.id}>
                                <FormGroup>
                                    <FormLabel>Prompt:</FormLabel>
                                    {' '}
                                    <FormControl
                                        onChange={(event) => this.onCardChange(index, event.target.value, 'prompt')}/>
                                    <FormLabel>Answer:</FormLabel>
                                    {' '}
                                    <FormControl
                                        onChange={(event) => this.onCardChange(index, event.target.value, 'answer')}/>
                                </FormGroup>
                            </div>
                        )
                    })}
                    <Button onClick={() => this.onAddCard()}>Add Card</Button>
                    {' '}
                    <Link to='/'>
                        <Button onClick={() => this.onSave()}>Save and Add the Stack</Button>
                    </Link>
                </Form>
            </div>
        )
    }
}

export default connect(null, { addStack })(StackForm);