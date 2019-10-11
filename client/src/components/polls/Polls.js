import React, { Fragment, useContext } from 'react';
import PollItem from './PollItem';
import PollContext from '../../context/poll/pollContext';

const Polls = () => {
	const pollContext = useContext(PollContext);

	const { polls, filtered } = pollContext;

	if (polls.length === 0) {
		return <h4>Please Post a Question</h4>;
	}

	return (
		<Fragment>
			{filtered !== null
				? filtered.map(poll => <PollItem id={poll._id} poll={poll} />)
				: polls.map(poll => <PollItem id={poll._id} poll={poll} />)}
		</Fragment>
	);
};

export default Polls;
