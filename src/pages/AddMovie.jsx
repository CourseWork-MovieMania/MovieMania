import React from 'react';

const AddMovie  = (props)=>{

 const obj = {
  movieName:``,
  genre:``,
  imdb:``,
  dir:``,
  cast:``,
  description:``,
  price:``,
 }
 return (
     <div className='AddMovie'>
       <div className="card-panel white lighten-5 z-depth-1">
           <h5 className='center'>Add Movie</h5>

           <div className='row'>
           
           <div className='col s6'>
          <div className="input-field">
          <input placeholder="Movie Name" type="text" className="validate" onChange={(event)=>{obj.movieName = event.target.value}}/>
            </div>

            <div className="input-field">
          <input placeholder="IMDB Rating" type="text" className="validate" onChange={(event)=>{obj.imdb = event.target.value}}/>
            </div>
            <div className="input-field">
          <input placeholder="Director" type="text" className="validate" onChange={(event)=>{obj.dir = event.target.value}}/>
            </div>
            <div class="input-field">
          <textarea placeholder='Description' class="materialize-textarea" onChange={(event)=>{obj.description = event.target.value}}></textarea>
        </div>
            </div>
             
            <div className='col s6'>
          <div className="input-field">
          <input placeholder="Genre" type="text" className="validate" onChange={(event)=>{obj.genre = event.target.value}}/>
            </div>
            <div className="input-field">
          <input placeholder="Cast" type="text" className="validate" onChange={(event)=>{obj.cast = event.target.value}}/>
            </div>
            <div className="input-field">
          <input placeholder="Price" type="text" className="validate" onChange={(event)=>{obj.price = event.target.value}}/>
            </div>
            </div>
    

            </div>
            
            <div className='CenterButton'>
            <input  type='submit' className="waves-effect waves-light btn blue darken-3" value='Submit' onClick={()=>{return props.updateMovies(obj)}}/>
            </div>
       </div>
     </div>
 )
}
export default AddMovie;