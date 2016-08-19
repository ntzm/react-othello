import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { placeDisk } from '../actions';

const mapStateToProps = state => ({
    spaces: state.get('spaces')
});

const mapDispatchToProps = dispatch => ({
    onCellClick: id => {
        dispatch(placeDisk(id));
    }
});

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;
