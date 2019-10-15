import {
	ADD_POLL,
	DELETE_POLL,
	SET_CURRENT,
	UPDATE_POLL, // TODO this
	FILTER_POLLS,
	CLEAR_FILTER,
	VOTE_ERROR,
	POLL_ERROR,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_POLL:
			return {
				...state,
				polls: [...state.polls, action.payload],
			};
		case UPDATE_POLL:
			return {
				...state,
				polls: state.polls.map(poll =>
					poll._id === action.payload._id ? action.payload : poll
				),
			};
		case DELETE_POLL:
			return {
				...state,
				polls: state.polls.filter(poll => poll._id !== action.payload),
			};
		case SET_CURRENT:
			return {
				...state,
				polls: state.polls.map(poll => {
					if (poll._id === action.payload.poll._id) {
						poll.current = action.payload.option;
					}
					return poll;
				}),
			};
		case FILTER_POLLS:
			return {
				...state,
				filtered: state.polls.filter(poll => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return poll.question.match(regex);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case POLL_ERROR:
		case VOTE_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
