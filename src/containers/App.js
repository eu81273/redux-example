import React, { Component, PropTypes } from 'react';
import * as actionCreator from '../actionCreator';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends Component {
	render () {
		//redux로부터 주입받는 속성
		const { dispatch, todos, filter } = this.props;

		return (
			<div>
				<AddTodo
					onAddClick={text => dispatch(actionCreator.addTodo(text))}
				/>

				<TodoList
					todos={todos}
					onTodoClick={index => dispatch(actionCreator.completeTodo(index))}
				/>

				<Footer
					filter={filter}
					onFilterChange={selectedFilter => dispatch(actionCreator.setFilter(selectedFilter))}
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
