import { combineReducers } from 'redux'
import {
	ADD_TODO, //Todo追加
} from '../actions'

function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			return [ // 入力内容 & 未完のTodoを追加
				{
					text: action.text,
					completed: false,
				},
				...state
			];
		default:
			return state;
	}
}

const todoApp = combineReducers({
	todos,
});

export default todoApp;
