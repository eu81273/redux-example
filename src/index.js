import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

//Redux의 스토어 생성. 첫번째 인자로 리듀서, 두번째 인자로 초기값을 지정할 수 있다.
//스토어는 하나만 가질 수 있고, 앱의 상태를 저장하고 액션을 받아 리듀서를 통해 새로운 상태가 발생되면 등록된 리스너들에게 전파한다.
let store = createStore(todoApp);
let rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
