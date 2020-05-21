import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from "./components/App";
import Stack from './components/Stack';
import rootReducer from './reducers/index';
import { setStack } from './actions';

import './index.css';
import StackForm from "./components/StackForm";

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(setStack({id: 1, title: 'example', cards: []}))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/stack' component={Stack}/>
                <Route path='/stack_form' component={StackForm}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
