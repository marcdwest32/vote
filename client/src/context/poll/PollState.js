import React, { useReducer } from 'react';
import axios from 'axios';
import PollContext from './pollContext';
import pollReducer from './pollReducer';
import {
	ADD_POLL,
	GET_POLLS,
	POLL_ERROR,
	DELETE_POLL,
	SET_CURRENT,
	UPDATE_POLL,
	VOTE_ERROR,
	FILTER_POLLS,
	CLEAR_FILTER,
} from '../types';

const PollState = props => {
	const initialState = {
		polls: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(pollReducer, initialState);

	// Add Poll
	const addPoll = async poll => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/polls', poll, config);
			dispatch({ type: ADD_POLL, payload: res.data });
		} catch (err) {
			dispatch({
				type: POLL_ERROR,
				payload: err.response.msg,
			});
		}
	};

	// Get Polls
	const getPolls = async () => {
		try {
			const res = await axios.get('/api/polls');
			dispatch({ type: GET_POLLS, payload: res.data });
		} catch (err) {
			dispatch({
				type: POLL_ERROR,
				payload: err.response.msg,
			});
		}
	};

	// Delete Poll
	const deletePoll = id => {
		dispatch({ type: DELETE_POLL, payload: id });
	};

	// Update Poll
	const updatePoll = async poll => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.put(`/api/polls/${poll._id}`, {
				vote: poll.current,
				config,
			});
			getPolls();
			dispatch({
				type: UPDATE_POLL,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: VOTE_ERROR,
				payload: err.response.msg,
			});
		}
	};

	// Set Current
	const setCurrent = (poll, option) => {
		const payload = {
			poll,
			option,
		};
		dispatch({ type: SET_CURRENT, payload });
	};

	// Filter Polls
	const filterPolls = text => {
		dispatch({ type: FILTER_POLLS, payload: text });
	};

	// Clear Filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<PollContext.Provider
			value={{
				polls: state.polls,
				filtered: state.filtered,
				error: state.error,
				addPoll,
				getPolls,
				deletePoll,
				setCurrent,
				updatePoll,
				filterPolls,
				clearFilter,
			}}
		>
			{props.children}
		</PollContext.Provider>
	);
};

export default PollState;
