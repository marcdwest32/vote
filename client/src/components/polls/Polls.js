import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
			<TransitionGroup>
				{filtered !== null
					? filtered.map(poll => (
							<CSSTransition key={poll._id} timeout={500} classNames='item'>
								<PollItem poll={poll} />
							</CSSTransition>
					  ))
					: polls.map(poll => (
							<CSSTransition key={poll._id} timeout={500} classNames='item'>
								<PollItem poll={poll} />
							</CSSTransition>
					  ))}
			</TransitionGroup>
		</Fragment>
	);
};

export default Polls;
