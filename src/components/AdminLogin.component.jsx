import React from 'react';
import {NavLink} from 'react-router-dom';
const AdminLogin = function(props){
    const obj =  {
      username: ``,
      password: ``
    }
    return(
        <div className="AdminLogin">
         <div className="card-panel white lighten-5 z-depth-1">
          <div className="row">

          <h5 className='center'>Admin Login</h5>

          <div className='row'>
          <div className="input-field">
          <input placeholder="Username" type="text" className="validate" onChange={(event)=>{obj.username = event.target.value}}/>
            </div>
            </div> 
          
            <div className="row">
            <div className="input-field">
               <input placeholder='Password' type="password" className="validate" onChange={(event)=>{obj.password = event.target.value}}/>
            </div>
          </div>
          <div className='CenterButton'>
              <NavLink to = '/confirmauth'>
                <input  type='submit' className="waves-effect waves-light btn blue darken-3" value='Login' onClick={()=>{return props.checkAuth(obj)}}/>
              </NavLink>
          </div>    
        
          </div>
        </div>

      </div>
            

    )
}

export default AdminLogin;   