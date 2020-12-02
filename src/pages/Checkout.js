import React,{ Component} from 'react'
 
class Checkout extends Component {

    state={
        confirm:null
    }

    onConfirmClick = () => {
        this.setState({
            confirm:"Order Confirmed!"
        })
        this.props.clearState()
        setTimeout(()=>this.props.history.push("/"),500)
               
    }

    render() {

        const list = this.props.list.map((item,i)=>{
            return <li key={i}>{item.movieName} {item.price}</li>
        })
        
        

        return (
            <div>
            <ul>
                {list}
            </ul>
            <button className="waves-effect waves-light btn blue darken-3" onClick={this.onConfirmClick}>Confirm Order</button>

            {this.state.confirm}
            </div>
        )
    }
}

export default Checkout

