import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

//Action
import {
	addTodo
} from '../../actions'

//Component
import AddTodo  from '../../components/AddTodo/AddTodo'
import TodoList from '../../components/TodoList/TodoList'

class App extends Component {
  render() {
		const { dispatch, visibleTodos } = this.props

    return (
			<div>
				<AddTodo  onAddClick={ text => dispatch(addTodo(text)) } />
				<TodoList todos={ visibleTodos } />
			</div>
    );
  }
}

App.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text:      PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired).isRequired,
}


//この関数が、上で定義されているAppに引数を渡す
function select(state) {
	return {
		visibleTodos: state.todos,
	};
}

export default connect(select)(App);
