import React from 'react';
import Polls from '../polls/Polls';
import PollForm from '../polls/PollForm';
import PollFilter from '../polls/PollFilter';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>
				<PollForm />
			</div>
			<div>
				<PollFilter />
				<Polls />
			</div>
		</div>
	);
};

export default Home;
