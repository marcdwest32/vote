import React, { useReducer } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import pollContext from './pollContext';
import pollReducer from './pollReducer';
import {
	ADD_POLL,
	DELETE_POLL,
	SET_CURRENT,
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
				option1vote: 0,
				option2vote: 0,
				option3vote: 0,
				current: null,
			},
			{
				id: 2,
				question: 'Who died for our sins?',
				option1: 'Jesus',
				option2: 'Lee Harvey Oswald',
				option3: 'Dinosaurs',
				option1vote: 0,
				option2vote: 0,
				option3vote: 0,
				current: null,
			},
			{
				id: 3,
				question: 'Who would make a better President?',
				option1: 'Bobcat Goldthwait',
				option2: 'Jesus',
				option3: 'Dinosaurs',
				option1vote: 0,
				option2vote: 0,
				option3vote: 0,
				current: null,
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
	const deletePoll = id => {
		dispatch({ type: DELETE_POLL, payload: id });
	};

	// Set Current
	const setCurrent = (poll, option) => {
		const payload = {
			poll,
			option,
		};
		dispatch({ type: SET_CURRENT, payload });
	};

	// Update Poll
	const updatePoll = poll => {
		axios.put(`/${poll.id}`, { vote: poll.current }).then(updatedPoll => {
			dispatch({ type: UPDATE_POLL, payload: updatedPoll });
		});
	};

	// Filter Polls

	// Clear Filter

	return (
		<pollContext.Provider
			value={{
				polls: state.polls,
				addPoll,
				deletePoll,
				setCurrent,
				updatePoll,
			}}
		>
			{props.children}
		</pollContext.Provider>
	);
};

export default PollState;
