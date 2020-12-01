import React from 'react';
import {NavLink} from 'react-router-dom';

const checkAuth = (props)=>{

	const AuthTrue =	
		<div className='center'>
			<div>Logged in Successfully</div>
			<NavLink to = '/addmovie'>
				<button className="waves-effect waves-light btn blue darken-3">Add Movies</button>
			</NavLink>
		</div>
	const AuthFalse = 
		<div className='center'>
			Login failed, Please go back to home and try again
		</div>
	
	return(
		<div>
			{props.auth?AuthTrue:AuthFalse}
		</div>
		);
}

export default checkAuth;