import React from 'react';

const MovieSearch = function(){
    return (
        <div className='row MovieSearch'>
         <table>
        <thead>
          <tr>
              <th>Movies Found</th>
              <th>Status</th>
              <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Available</td>
            <td>$0.87 <a href='/' className="waves-effect waves-light btn blue darken-3 RentButton">Rent</a></td>
          </tr>
        </tbody>
      </table>
        </div>
    )
}

export default MovieSearch;