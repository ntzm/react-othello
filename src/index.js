import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
import game from './reducers';

const store = createStore(game);

render(
    <Provider store={store}>
        <BoardContainer />
    </Provider>,
    document.getElementById('reversi')
);
