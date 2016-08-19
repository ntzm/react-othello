import Immutable from 'immutable';
import { NONE, LIGHT, DARK } from '../players';

const getNewGameState = () => {
    let base = {
        currentPlayer: DARK,
        spaces: Array(64).fill(NONE),
    };

    base.spaces[27] = base.spaces[36] = DARK;
    base.spaces[28] = base.spaces[35] = LIGHT;

    return Immutable.fromJS(base);
}

const getOppositePlayer = player => player === LIGHT ? DARK : LIGHT;

const placeDisk = (state, action) => {
    let spaceHasBeenTaken = state.getIn(['spaces', action.id]) !== NONE;

    if (spaceHasBeenTaken) return state;

    let newState = state.setIn(['spaces', action.id], state.get('currentPlayer'));
    newState = newState.set('currentPlayer', getOppositePlayer(newState.get('currentPlayer')));

    return newState;
};

const game = (state = getNewGameState(), action) => {
    const handlers = {
        'PLACE_DISK': placeDisk,
    };

    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state;
};

export default game;
