import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
// import AlertContext from '../../context/alert/alertContext';

const Login = props => {
	// const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	// const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'Invalid Credentials') {
			// setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	const { username, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (username === '' || password === '') {
			// setAlert('Please Fill In All Fields', 'danger');
		} else {
			login({
				username,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='username'>Username</label>
					<input
						type='username'
						name='username'
						value={username}
						onChange={onChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
					/>
				</div>
				<input
					type='submit'
					value='Login'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Login;
