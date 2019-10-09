/* eslint-disable no-undef */
import React, { useState, useContext } from 'react';
import PollContext from '../../context/poll/pollContext';

const PollForm = () => {
	const pollContext = useContext(PollContext);

	const [poll, setPoll] = useState({
		question: '',
		option1: '',
		option2: '',
		option3: '',
	});

	const { question, option1, option2, option3 } = poll;

	const onChange = e => setPoll({ ...poll, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		pollContext.addPoll(poll);
		setPoll({
			question: '',
			option1: '',
			option2: '',
			option3: '',
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>Survey The People</h2>
			<input
				type='text'
				placeholder='Question'
				name='question'
				value={question}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Option1'
				name='option1'
				value={option1}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Option2'
				name='option2'
				value={option2}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Option3'
				name='option3'
				value={option3}
				onChange={onChange}
			/>
			<div>
				<input
					type='submit'
					value='Add Poll'
					className='btn btn-primary btn-block'
				/>
			</div>
		</form>
	);
};

export default PollForm;
