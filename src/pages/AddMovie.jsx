import React from 'react';

const AddMovie  = (props)=>{

const onSubmitHandler = ()=>{
  try{
    //console.log(resetDiv1.current.children[1].children[0].value,resetDiv2)
    for(const value of Object.entries(obj)){
        //console.log(value)
        if(value[1] === ``) throw `Please fill all the fields`;
      }
      if(!Number.isFinite(parseInt(obj.price))) throw `Price field must be a positive number`
      divRef.current.innerHTML = `Movie Added Successfully`;
      //console.log(clearDiv);
      clearDiv();
      return props.updateMovies(obj)
    }  
  catch(err){
    //console.log(divRef);
    divRef.current.innerHTML = err;
  }
}
 const clearDiv = ()=>{
  const div1Child = [...resetDiv1.current.children]
  div1Child.forEach((field)=>field.children[0].value=``);
  const div2Child = [...resetDiv2.current.children]
  div2Child.forEach((field)=>field.children[0].value=``);
  //console.log(resetDiv1.current.children[1].children[0].value,resetDiv2)
 }
 const resetDiv1 = React.useRef(null);
 const resetDiv2 = React.useRef(null);
 const divRef = React.useRef(null);
 const errorMessage = <div ref = {divRef}></div>
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
           
           <div className='col s6' ref = {resetDiv1}>
          <div className="input-field">
          <input placeholder="Movie Name" type="text" className="validate" defaultValue = '' onChange={(event)=>{obj.movieName = event.target.value}}/>
            </div>

            <div className="input-field">
          <input placeholder="IMDB Rating" type="text" className="validate" defaultValue = '' onChange={(event)=>{obj.imdb = event.target.value}}/>
            </div>
            <div className="input-field">
          <input placeholder="Director" type="text" className="validate" defaultValue = '' onChange={(event)=>{obj.dir = event.target.value}}/>
            </div>
            <div className="input-field">
          <input placeholder='Description' className="materialize-textarea" defaultValue = '' onChange={(event)=>{obj.description = event.target.value}}/>
        </div>
            </div>
             
            <div className='col s6' ref = {resetDiv2}>
          <div className="input-field">
          <input placeholder="Genre" type="text" className="validate" defaultValue = '' onChange={(event)=>{obj.genre = event.target.value}}/>
            </div>
            <div className="input-field">
          <input placeholder="Cast" type="text" className="validate" defaultValue = '' onChange={(event)=>{obj.cast = event.target.value}}/>
            </div>
            <div className="input-field">
          <input placeholder="Price" type="text" className="validate" defaultValue = '' onChange={(event)=>{obj.price = event.target.value}}/>
            </div>
            </div>
    

            </div>
            
            <div className='CenterButton'>
            <input  type='submit' className="waves-effect waves-light btn blue darken-3" value='Submit' onClick={onSubmitHandler}/>
            </div>
            {errorMessage}
       </div>
     </div>
 )
}
export default AddMovie;