import React, { Component, PropTypes } from 'react'
import Todo from '../Todo/Todo'

export default class TodoList extends Component {
	
	render() {
		return (
			<div className='ui ordered list'>
			{ this.props.todos.map( (todo, index) =>
					<Todo {...todo}
						key={ index }
					/>
			)}
			</div>
		)
	}
}

TodoList.propTypes = {
	todos:       PropTypes.arrayOf(PropTypes.shape({ //Todoの配列
		text:      PropTypes.string.isRequired, //Todoのテキスト
		completed: PropTypes.bool.isRequired,   //Todoが完了しているかのフラグ
	}).isRequired).isRequired
}
