import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import * as types from './types';
import appReducer from './reducers';
import App from './containers/App';

//Redux의 스토어 생성. 첫번째 인자로 리듀서, 두번째 인자로 초기값을 지정할 수 있다.
//스토어는 하나만 가질 수 있고, 앱의 상태를 저장하며 액션을 받아 리듀서를 통해 새로운 상태가 발생되면 등록된 리스너들에게 전파한다.
let store = createStore(appReducer);
let rootElement = document.getElementById('root');

function filterTodos (todos, filter) {
	switch (filter) {
		case types.filter.SHOW_ALL:
			return todos;
		case types.filter.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
		case types.filter.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
	}
}

function stateSelector (state) {
	return {
		todos: filterTodos(state.todos, state.filter),
		filter: state.filter
	};
};

function render (state) {
	ReactDOM.render(
		<App dispatch={store.dispatch} todos={state.todos} filter={state.filter} />,
		rootElement
	);
}

//값이 변경되면 다시 그리기
store.subscribe(() => render(stateSelector(store.getState())));

//화면에 그리기
render(stateSelector(store.getState()));
