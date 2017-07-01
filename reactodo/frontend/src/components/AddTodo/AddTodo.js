import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
	
	render() {
		return (
			<div className='ui input'>
				<input type='text' ref='input' placeholder='todo contents here' />
				<button className='ui primary button' onClick={ e => this.handleCheck(e) }>
					Add
				</button>
			</div>
		)
	}

	handleCheck(e) {
		const input = this.refs.input;
		const input_text = input.value.trim();

		this.props.onAddClick(input_text);
		input.value = ''; //Initialize input
	}
}


// AddTodoは、入力に受け取ったテキストを扱うイベントハンドラ
// onAddClickを必要とする
AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}

