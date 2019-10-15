import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { SET_ALERT } from '../../context/types';

const Register = props => {
	const authContext = useContext(AuthContext);
	const { register, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'User already exists') {
			// setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: '',
		password: '',
		password2: '',
	});

	const { name, password, password2 } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (name === '' || password === '') {
			// setAlert('Please Fill Out All Fields', 'danger');
		}
		if (password.length < 6 || password2.length < 6) {
			// setAlert('Password Must be at Least 6 Characters', 'danger');
		}
		if (password !== password2) {
			// setAlert('Password Does Not Match', 'danger');
		} else {
			register({
				name,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' value={name} onChange={onChange} />
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
				<div className='form-group'>
					<label htmlFor='password2'>Confirm Password</label>
					<input
						type='password'
						name='password2'
						value={password2}
						onChange={onChange}
					/>
				</div>
				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Register;