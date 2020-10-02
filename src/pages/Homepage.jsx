import React from 'react';
import AdminLogin from '../components/AdminLogin.component';
import AvailableMovie from '../components/AvailableMovie.component';
import '../App.css';

const HomePage = function(){
    return(
    <div className="row HomePage">
    <AdminLogin />
    <AvailableMovie />
    </div>
    
    )
}

export default HomePage;