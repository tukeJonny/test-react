import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {

	render() {
		return (
			<div className='item'>
					{ this.props.text }
			</div>
		)
	}
}

Todo.propTypes = {
	text:      PropTypes.string.isRequired, //Todoテキスト
	completed: PropTypes.bool.isRequired,   //完了しているか否かのフラグ
}
