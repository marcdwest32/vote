import {
	ADD_POLL,
	DELETE_POLL,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_POLL,
	FILTER_POLLS,
	CLEAR_FILTER,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_POLL:
			return {
				...state,
				polls: [...state.polls, action.payload],
			};
		case DELETE_POLL:
			return {
				...state,
				polls: state.polls.filter(poll => poll.id !== action.payload),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		default:
			return state;
	}
};
