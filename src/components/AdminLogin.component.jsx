import React from 'react';

const AdminLogin = function(){
    return(
        <div className="AdminLogin">
         <div className="card-panel white lighten-5 z-depth-1">
          <div className="row">

          <h5 className='center'>Admin Login</h5>

          <div className='row'>
          <div className="input-field">
          <input placeholder="username" type="text" className="validate" />
            </div>
            </div> 
          
            <div className="row">
            <div className="input-field">
               <input placeholder='password' type="password" className="validate" />
            </div>
          </div>
          <div className='CenterButton'>
            <input  type='submit' className="waves-effect waves-light btn blue darken-3" value='Login'/>
            </div>    
        
          </div>
        </div>

      </div>
            

    )
}

export default AdminLogin;   