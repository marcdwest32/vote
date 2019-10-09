import React from 'react';
import Polls from '../polls/Polls';
import PollForm from '../polls/PollForm';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>
				<PollForm />
			</div>
			<div>
				<Polls />
			</div>
		</div>
	);
};

export default Home;
