import React, { useContext, useRef, useEffect } from 'react';
import PollContext from '../../context/poll/pollContext';

const PollFilter = () => {
	const pollContext = useContext(PollContext);
	const text = useRef('');
	const { filterPolls, clearFilter, filtered } = pollContext;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = e => {
		if (text.current.value !== '') {
			filterPolls(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				ref={text}
				type='text'
				placeholder='Search Polls...'
				onChange={onChange}
			/>
		</form>
	);
};

export default PollFilter;
