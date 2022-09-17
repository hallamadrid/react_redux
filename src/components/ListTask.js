import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';


const ListTask = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<Task id={todo.id} title={todo.title} completed={todo.completed} isDone={todo.isDone}/>
			))}
		</ul>
	);
};

export default ListTask;
