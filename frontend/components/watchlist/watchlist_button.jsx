import React from 'react';
import { asArray } from '../../reducers/selector';

class WatchlistButton extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            following: this.props.following
        }
    }
    handleSubmit( e ){
        e.preventDefault();
        if(this.props.currentUserId){
            if ( this.props.following){
                this.props.removeWatchlist( 
                    this.props.watchlists[this.props.ticker].id 
                ).then(()=> this.setState({following: false}))
            } else {
                this.props.createWatchlist(this.props.ticker)
                .then(()=> this.setState({following: true}))
                
            }
        }else {
            this.props.history.push('/login')
        }

    }

    componentDidMount() {  
   
    }

    render(){ 
        if(this.props.currentUserId){
            return (
                <form onSubmit={ this.handleSubmit }>
                    <input className="watchbutton" type="submit" value={ this.props.following ? "Remove from Watchlist" : "Add to Watchlist"}/>
                </form>
            )
        }else{
            return(
                <form onSubmit={ this.handleSubmit }>
                    <input className="watchbutton" type="submit" value={ "Login to add" } />
                </form>
               
            )
        }
    }
  
}

export default WatchlistButton;