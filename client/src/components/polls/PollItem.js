import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PollContext from '../../context/poll/pollContext';

const PollItem = ({ poll }) => {
	const pollContext = useContext(PollContext);
	const { id, question, option1, option2, option3 } = poll;

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{question}{' '}
				<span style={{ float: 'right' }} className={'badge badge-primary '}>
					Vote
				</span>
			</h3>
			<ul className='list'>
				<li>
					<i className='fas fa-dice-one'> {option1}</i>
				</li>
				<li>
					<i className='fas fa-dice-two'> {option2}</i>
				</li>
				<li>
					<i className='fas fa-dice-three'> {option3}</i>
				</li>
			</ul>
		</div>
	);
};

export default PollItem;
