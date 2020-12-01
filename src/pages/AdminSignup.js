import React from 'react';
import {NavLink} from 'react-router-dom';

const AdminSignup = (props)=>{
	const obj = {
		username: ``,
		password: ``
	}
	let submitClick = ``;
	const inputRef = React.useRef(null);
	const invisibleButton = <input type='hidden' ref={inputRef}/>
	return(
		<div>
			<input placeholder="New Username" type="text" className="validate" onChange={(event)=>{obj.username = event.target.value}}/>
			<input placeholder="Set Password" type="password" className="validate" onChange={(event)=>{obj.password = event.target.value}}/>
			<input  type='submit' value='Submit' className="waves-effect waves-light btn blue darken-3" onClick={()=>{setTimeout(()=>{inputRef.current.click()},500); return (props.addAdmin(obj));}}/>
			<NavLink exact to = '/'>{invisibleButton}</NavLink>
		</div>
		);
}

export default AdminSignup;