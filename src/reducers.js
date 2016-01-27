import { actionTypes, filterTypes } from './actions';

function todosReducer (previousTodos = [], action) {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return [...previousTodos, {
					text: action.text,
					completed: false
				}];

		case actionTypes.COMPLETE_TODO:
			return previousTodos.map((todo, index) => {
				if (action.index === index) {
					return {
						text: todo.text,
						completed: !todo.completed
					};
				}
				else {
					return todo;
				}
			});

		default:
			return previousTodos;
	}
}

function filterReducer (previousFilter = filterTypes.SHOW_ALL, action) {
	switch (action.type) {
		case actionTypes.SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return previousFilter;
	}
}

//리듀서는 이전 state와 action을 받아 '새로운' state를 제공하는 순수함수다.
export default function todoApp (previousState = {}, action) {
	return {
		filter: filterReducer(previousState.filter, action),
		todos: todosReducer(previousState.todos, action)
	}
};
