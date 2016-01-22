//액션 타입 상수
export const actionTypes = {
	ADD_TODO: 'ADD_TODO',
	COMPLETE_TODO: 'COMPLETE_TODO',
	SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

//그밖의 상수 (여기에서는 할일 보여주기 방식)
export const filterTypes = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

//액션 생성자
//액션은 무언가 일어난다는 사실을 기술한다.
//액션 생성자는 액션을 만드는 함수로 순수 함수로 구성된다.
export function addTodo (text) {
	return {
		type: actionTypes.ADD_TODO,
		text
	};
};

export function completeTodo (index) {
	return {
		type: actionTypes.COMPLETE_TODO,
		index
	};
};

export function setFilter (filter) {
	return {
		type: actionTypes.SET_VISIBILITY_FILTER,
		filter
	};
}
