import React from 'react';

const MovieSearch = (props)=>{
    return (
        <div className='row MovieSearch'>
         <table>
        <thead>
          <tr>
              <th>Movies Found</th>
              <th>Genre</th>
              <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {(props.list.length)?props.list.map(m=>{
      return(
            <tr>
              <td>{m.obj.movieName}</td>
              <td>{m.obj.genre}</td>
              <td>{m.obj.price} <a href='/' className="waves-effect waves-light btn blue darken-3 RentButton">Rent</a></td>
            </tr>
            );
    }):null}
        </tbody>
      </table>
        </div>
    )
}

export default MovieSearch;








    // console.log(props.list);
    // const moviesFound = (typeof props.list !== `undefined`)?