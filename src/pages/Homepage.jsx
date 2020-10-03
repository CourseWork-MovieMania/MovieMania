import React from 'react';
import AdminLogin from '../components/AdminLogin.component';
import AvailableMovie from '../components/AvailableMovie.component';
import '../App.css';

const HomePage = (props)=>{
    return(
    <div className="row HomePage">
    <AdminLogin />
    <AvailableMovie updateList = {props.updateList} list = {props.list} />
    </div>
    
    )
}

export default HomePage;