import { combineReducers } from 'redux';
import { actionTypes, filterTypes } from './actions';

let defaultState = {
	filter: filterTypes.SHOW_ALL,
	todos: []
};

//리듀서는 이전 state와 action을 받아 '새로운' state를 제공하는 순수함수다.
export default function todoApp (state = defaultState, action) {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return Object.assign({}, state, {
				todos: [...state.todos, {
					text: action.text,
					completed: false
				}]
			});

		case actionTypes.COMPLETE_TODO:
			return Object.assign({}, state, {
				todos: [...state.todos.slice(0, action.index), {
					text: state.todos[action.index].text,
					completed: !state.todos[action.index].completed
				}, ...state.todos.slice(action.index + 1)]
			});

		case actionTypes.SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				filter: action.filter
			});

		default:
			return state;
	}
};
