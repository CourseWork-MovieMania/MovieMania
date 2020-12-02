import React from 'react';
import {NavLink} from 'react-router-dom';

const AdminSignup = (props)=>{
	const obj = {
		username: ``,
		password: ``
	}
	const divRef = React.useRef(null);
 	const submitClick = <div ref = {divRef}></div>
	const inputRef = React.useRef(null);
	const invisibleButton = <input type='hidden' ref={inputRef}/>
	return(
		<div>
			<input placeholder="New Username" type="text" className="validate" onChange={(event)=>{obj.username = event.target.value}}/>
			<input placeholder="Set Password" type="password" className="validate" onChange={(event)=>{obj.password = event.target.value}}/>
			<input  type='submit' value='Submit' className="waves-effect waves-light btn blue darken-3" onClick={()=>{setTimeout(()=>{inputRef.current.click()},500); divRef.current.innerHTML = `New Admin Created Successfully`;return (props.addAdmin(obj));}}/>
			{submitClick}
			<NavLink exact to = '/'>{invisibleButton}</NavLink>
		</div>
		);
}

export default AdminSignup;