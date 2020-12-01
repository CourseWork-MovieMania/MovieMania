import React from 'react';

const AdminSignup = (props)=>{
	const obj = {
		username: ``,
		password: ``
	}
	return(
		<div>
			<input placeholder="New Username" type="text" onChange={(event)=>{obj.username = event.target.value}}/>
			<input placeholder="Set Password" type="password"onChange={(event)=>{obj.password = event.target.value}}/>
			<input  type='submit' value='Submit' onClick={()=>{return props.addAdmin(obj)}}/>
		</div>
		);
}

export default AdminSignup;