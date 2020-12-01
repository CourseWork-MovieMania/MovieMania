import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './components/Header.component';
import HomePage from './pages/Homepage';
import AddMovie from './pages/AddMovie';
import Movies from './pages/Movies';
import AdminSignup from './pages/AdminSignup';
import Admins from './pages/Admins';
import Checkout from './pages/Checkout';
import CheckAuth from './pages/CheckAuth';
import {Link} from 'react-router-dom';


class App extends React.Component {

    state = {
        movies:[],
        list:[],
        admins:[],
        auth: false,
        price:0,
        checkoutMovies:[]
    }


    // updateCheckoutList = () => {

    // }

    updatePrice = (obj) => {
        let temp = this.state.price
        temp = temp+parseInt(obj.price)
        console.log(temp)
        let array = [...this.state.checkoutMovies];
        array.push(obj)
        this.setState({
            price:temp,
            checkoutMovies:array
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
    addAdmin = (obj)=>{
        const adminclassobj = new Admins(obj);
        const admins = [...this.state.admins];
        admins.push(adminclassobj);
        this.setState({admins: admins});
    }
    checkAuth =(obj)=>{
        const admins = [...this.state.admins]
        if(admins.filter(m=>(m.obj.username===obj.username && m.obj.password===obj.password)).length){
            this.setState({auth: true});
        }
    }
    render(){
        return(
            <>
            <BrowserRouter>
            <div className="App">
            <Header />
            <Switch>
            <Route exact path='/' render={()=><HomePage price={this.updatePrice} updateList = {this.updateList} list = {this.state.list} checkAuth = {this.checkAuth}/>} />
            <Route path='/addmovie' render={()=><AddMovie updateMovies = {this.updateMovies}/>}/>
            <Route path= '/adminsignup' render={()=><AdminSignup addAdmin = {this.addAdmin}/>}/>
            <Route path= '/checkout' render={(props)=><Checkout {...props} list = {this.state.checkoutMovies} />}/>
            <Route path= '/confirmauth' render={()=><CheckAuth auth = {this.state.auth}/>}/>
            </Switch>
            <center>
            <div>
                <hr/>
                <p>Total price</p>
                {this.state.price}

            </div>
            <Link to="/checkout"><button className="waves-effect waves-light btn blue darken-3">Buy</button></Link>
            </center>
            </div>
            </BrowserRouter>
            
            </>
        );
    }
}

export default App;
