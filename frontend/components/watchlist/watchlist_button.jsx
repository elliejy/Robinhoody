import React from 'react';
import { asArray } from '../../reducers/selector';

class WatchlistButton extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state={
            following: true
        }
    }
    handleSubmit( e ){
        e.preventDefault();
        debugger
        if ( e.target.innerHTML === '<input type="submit" value="Add to Watchlist">'){
            this.props.createWatchlist( this.props.ticker ).then(()=> this.setState({ following: false }))
        } else if ( e.target.innerHTML === '<input type="submit" value="Remove from Watchlist">'){
            this.props.removeWatchlist( this.props.currentUserId).then( () => this.setState( { following: true } ) )
        }

    }

    componentDidMount() {  
        this.props.watchlists.map( watchlist => {
            if ( watchlist.ticker === this.props.ticker.toLowerCase() && watchlist.following !== this.state.following ) {
                if( watchlist.following === true){
                    this.setState( { following: true } )
                }else{
                    this.setState( {following: false})
                }
            }
        } )
    }

    render(){ 
        if(this.state.following){
            return(
            <form onSubmit={ this.handleSubmit }>
                <input type="submit" value="Remove from Watchlist"/>
            </form>)
        }else {
            return (
            <form onSubmit={ this.handleSubmit }>
                <input type="submit" value="Add to Watchlist"/>
            </form>
        )}
    }
  
}

export default WatchlistButton;