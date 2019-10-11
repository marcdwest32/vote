import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PollContext from '../../context/poll/pollContext';

const PollItem = ({ poll }) => {
	const pollContext = useContext(PollContext);
	const { setCurrent } = pollContext;
	const {
		id,
		question,
		option1,
		option2,
		option3,
		option1vote,
		option2vote,
		option3vote,
	} = poll;

	const checked = 'fas fa-check-circle';
	const unchecked = 'far fa-circle';

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{question}{' '}
				<div style={{ float: 'right' }} className={'badge badge-primary'}>
					Vote
					{/* TODO add clickHandler for casting vote */}
				</div>
			</h3>
			<ul className='list'>
				<li>
					<i
						className={poll.current === 1 ? checked : unchecked}
						onClick={() => setCurrent(poll, 1)}
					>
						{' '}
						{option1}
					</i>
					{'  '}
					{option1vote}
				</li>
				<li>
					<i
						className={poll.current === 2 ? checked : unchecked}
						onClick={() => setCurrent(poll, 2)}
					>
						{' '}
						{option2}
					</i>
					{'  '}
					{option2vote}
				</li>
				<li>
					<i
						className={poll.current === 3 ? checked : unchecked}
						onClick={() => setCurrent(poll, 3)}
					>
						{' '}
						{option3}
					</i>
					{'  '}
					{option3vote}
				</li>
			</ul>
		</div>
	);
};

export default PollItem;
