import React from 'react';
import {NavLink} from 'react-router-dom';
const AdminLogin = function(){
    return(
        <div className="AdminLogin">
         <div className="card-panel white lighten-5 z-depth-1">
          <div className="row">

          <h5 className='center'>Admin Login</h5>

          <div className='row'>
          <div className="input-field">
          <input placeholder="Username" type="text" className="validate" />
            </div>
            </div> 
          
            <div className="row">
            <div className="input-field">
               <input placeholder='Password' type="password" className="validate" />
            </div>
          </div>
          <div className='CenterButton'>
            {/*Adding a navlink for comfort for now to be changed later*/}
            <NavLink to = "/addmovie">
              <input  type='submit' className="waves-effect waves-light btn blue darken-3" value='Login'/>
            </NavLink>
          </div>    
        
          </div>
        </div>

      </div>
            

    )
}

export default AdminLogin;   