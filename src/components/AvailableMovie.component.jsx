import React from 'react';
import MovieSearch from './MovieSearch.component';
import './common.css';

const AvailableMovie = function(){
    return(
        <div className="AvailableMovie">

<div className="card-panel white lighten-5 z-depth-1">
  <h5 className='center'>Available Movies</h5>
  <input placeholder='Search' type='search'/>
  <MovieSearch />
 </div>
        </div>
    )
}

export default AvailableMovie;