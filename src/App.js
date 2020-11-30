import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './components/Header.component';
import HomePage from './pages/Homepage';
import AddMovie from './pages/AddMovie';
import Movies from './pages/Movies';
class App extends React.Component {

    state = {
        movies:[],
        list:[],
        price:0
    }


    updatePrice = (price) => {
        let temp = this.state.price
        temp = temp+parseInt(price)
        console.log(temp)
        this.setState({
            price:temp
        })
    }

    updateMovies = (obj)=>{
        const classobj = new Movies(obj);
        const movies = [...this.state.movies];
        movies.push(classobj);
        this.setState({movies: movies,list:movies});
        // setTimeout(()=>console.log(this.state.movies[0].obj),100)
    }
    updateList = (search)=>{
        const list = Movies.search(this.state.movies,search);
        this.setState({list: list});
        setTimeout(()=>console.log(this.state.list),100)
    }
    render(){
        return(
            <>
            <BrowserRouter>
            <div className="App">
            <Header />
            <Switch>
            <Route exact path='/' render={()=><HomePage price={this.updatePrice} updateList = {this.updateList} list = {this.state.list} />} />
            <Route path='/addmovie' render={()=><AddMovie updateMovies = {this.updateMovies}/>}/>
            
            </Switch>
            <div>
                <center><p>Total price</p></center>
                <center>{this.state.price}</center>
            </div>
            </div>
            </BrowserRouter>
            
            </>
        );
    }
}

export default App;
