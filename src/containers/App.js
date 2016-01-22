import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actionTypes, filterTypes, addTodo, completeTodo, setFilter } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
	render () {
		//redux로부터 주입받는 속성
		const { dispatch, todos, filter} = this.props;

		return (
			<div>
				<AddTodo
					onAddClick={text => dispatch(addTodo(text))}
				/>

				<TodoList
					todos={todos}
					onTodoClick={index => dispatch(completeTodo(index))}
				/>

				<Footer
					filter={filter}
					onFilterChange={selectedFilter => dispatch(setFilter(selectedFilter))}
				/>
			</div>
		);
	}
};

App.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})),
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
};


function filterTodos (todos, filter) {
	switch (filter) {
		case filterTypes.SHOW_ALL:
			return todos;

		case filterTypes.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);

		case filterTypes.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
	}
}

function stateSelector (state) {
	return {
		todos: filterTodos(state.todos, state.filter),
		filter: state.filter
	};
};

//상태를 주입하려는 컴포넌트를 connect 로 감싸준다.
export default connect(stateSelector)(App);
