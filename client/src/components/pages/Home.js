import React, { useContext, useEffect } from 'react';
import Polls from '../polls/Polls';
import PollForm from '../polls/PollForm';
import PollFilter from '../polls/PollFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

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
