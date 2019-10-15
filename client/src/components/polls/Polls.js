import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PollItem from './PollItem';
import PollContext from '../../context/poll/pollContext';
import Spinner from '../layout/Spinner';

const Polls = () => {
	const pollContext = useContext(PollContext);

	const { polls, filtered, getPolls, loading } = pollContext;

	useEffect(() => {
		getPolls();
		// eslint-disable-next-line
	}, []);

	if (polls !== null && polls.length === 0 && !loading) {
		return <h4>Please Post a Question</h4>;
	}

	return (
		<Fragment>
			{polls !== null && !loading ? (
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
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Polls;
