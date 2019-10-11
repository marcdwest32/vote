import {
	ADD_POLL,
	DELETE_POLL,
	SET_CURRENT,
	UPDATE_POLL, // TODO this
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
			case UPDATE_POLL:
				return {
					...state,
					
				}
		case DELETE_POLL:
			return {
				...state,
				polls: state.polls.filter(poll => poll.id !== action.payload),
			};
		case SET_CURRENT:
			return {
				...state,
				polls: state.polls.map(poll => {
					if (poll.id === action.payload.poll.id) {
						poll.current = action.payload.option;
					}
					return poll;
				}),
			};
		default:
			return state;
	}
};
