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

        if ( this.props.following){
            this.props.removeWatchlist( 
                this.props.watchlists[this.props.ticker.toLowerCase()].id 
            ).then(()=> this.setState({following: false}))
        } else {
            this.props.createWatchlist(this.props.ticker)
            .then(()=> this.setState({following: true}))
            
        }

    }

    componentDidMount() {  
   
    }

    render(){ 
        return (
                <form onSubmit={ this.handleSubmit }>
                    <input type="submit" value={ this.props.following ? "Remove from Watchlist" : "Add to Watchlist"}/>
                </form>
        )
    }
  
}

export default WatchlistButton;