import React from 'react';
import MovieSearch from './MovieSearch.component';
import Movies from '../pages/Movies';
import './common.css';

const AvailableMovie = (props)=>{
    return(
        <div className="AvailableMovie">
			<div className="card-panel white lighten-5 z-depth-1">
			  <h5 className='center'>Available Movies</h5>
			  <input placeholder='Search' type='search' onChange={(event)=>props.updateList(event.target.value)}/>
			  <MovieSearch price={props.price} list = {props.list} />
			</div>
        </div>
    )
}

export default AvailableMovie;