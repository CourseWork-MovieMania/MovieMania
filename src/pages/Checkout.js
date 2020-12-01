import React,{ Component} from 'react'
 
class Checkout extends Component {

    state={
        confirm:null
    }

    onConfirmClick = () => {
        this.setState({
            confirm:"Order Confirmed!"
        })
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
            <button onClick={this.onConfirmClick}>Confirm Order</button>

            {this.state.confirm}
            </div>
        )
    }
}

export default Checkout

