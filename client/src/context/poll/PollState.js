import React, { useReducer } from 'react';
import uuid from 'uuid';
import pollContext from './pollContext';
import pollReducer from './pollReducer';
import {
	ADD_POLL,
	DELETE_POLL,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_POLL,
	FILTER_POLLS,
	CLEAR_FILTER,
} from '../types';

const PollState = props => {
	const initialState = {
		polls: [
			{
				id: 1,
				question: 'Why are we here?',
				option1: 'Because',
				option2: 'Jesus',
				option3: 'Dinosaurs',
			},
			{
				id: 1,
				question: 'Who died for our sins?',
				option1: 'Jesus',
				option2: 'Lee Harvey Oswald',
				option3: 'Dinosaurs',
			},
			{
				id: 1,
				question: 'Who would make a better President?',
				option1: 'Bobcat Goldthwait',
				option2: 'Jesus',
				option3: 'Dinosaurs',
			},
		],
	};

	const [state, dispatch] = useReducer(pollReducer, initialState);

	// Add Poll
	const addPoll = poll => {
		poll.id = uuid.v4();
		dispatch({ type: ADD_POLL, payload: poll });
	};

	// Delete Poll

	// Set Current

	// Clear Current

	// Update Poll

	// Filter Polls

	// Clear Filter

	return (
		<pollContext.Provider
			value={{
				polls: state.polls,
				addPoll,
			}}
		>
			{props.children}
		</pollContext.Provider>
	);
};

export default PollState;
