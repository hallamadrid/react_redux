import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalCompleteItems from './components/TotalCompleteItems';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css'

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1 className='abdou'>My Todo List</h1>
			<AddTask />
			<ListTask />
			<TotalCompleteItems />
		</div>
	);
};

export default App;