import React, { Fragment, useContext } from 'react';
import PollItem from './PollItem';
import PollContext from '../../context/poll/pollContext';

const Polls = () => {
	const pollContext = useContext(PollContext);

	const { polls } = pollContext;

	return (
		<Fragment>
			{polls.map(poll => (
				<PollItem id={poll.id} poll={poll} />
			))}
		</Fragment>
	);
};

export default Polls;
