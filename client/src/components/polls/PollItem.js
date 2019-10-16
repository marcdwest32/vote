import React, { useContext } from 'react';
import PollContext from '../../context/poll/pollContext';
import Chart from '../Chart'

const PollItem = ({ poll }) => {
	const pollContext = useContext(PollContext);
	const { setCurrent, updatePoll } = pollContext;
	const {
		_id,
		question,
		option1,
		option2,
		option3,
		option1votes,
		option2votes,
		option3votes,
	} = poll;

	const checked = 'fas fa-check-circle';
	const unchecked = 'far fa-circle';

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{question}{' '}
				<div
					style={{ float: 'right' }}
					className={'badge badge-primary hover-pointer'}
					onClick={() => updatePoll(poll)}
				>
					Vote
				</div>
			</h3>
			<ul className='list'>
				<li className='hover-pointer'>
					<i
						className={poll.current === 1 ? checked : unchecked}
						onClick={() => setCurrent(poll, 1)}
					>
						{' '}
						{option1}
					</i>
					{'  '}
					{option1votes}
				</li>
				<li className='hover-pointer'>
					<i
						className={poll.current === 2 ? checked : unchecked}
						onClick={() => setCurrent(poll, 2)}
					>
						{' '}
						{option2}
					</i>
					{'  '}
					{option2votes}
				</li>
				<li className='hover-pointer'>
					<i
						className={poll.current === 3 ? checked : unchecked}
						onClick={() => setCurrent(poll, 3)}
					>
						{' '}
						{option3}
					</i>
					{'  '}
					{option3votes}
				</li>
				<Chart poll={poll}/>
			</ul>
		</div>
	);
};

export default PollItem;
