import React from 'react';
import { asArray } from '../../reducers/selector';

class WatchlistButton extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.watchlists = this.props.fetchWatchlists()

        this.ticker = this.props.ticker
        this.state={
            following: this.checkFollowing()
        }
    }
    handleClick( e ){
        e.preventDefault();
        if ( e.target.value === "Add to Watchlist"){
            this.props.createWatchlist( this.ticker ).then(()=>this.setState({following:true}))
        } else if ( e.target.value ==="Remove from Watchlist"){
            this.props.removeWatchlist( this.ticker ).then( () => this.setState( { following: false } ) )
        }

    }

    componentDidMount() {  
 
    }

    checkFollowing(){
        const arrlists = asArray(this.watchlists)
        arrlists.map(watchlist=>{
           if(watchlist.ticker === this.ticker){
               return watchlist.following
           }
        })
    }

    render(){ 
        if(this.state.following){
            return <input type="submit" onClick={ this.handleClick } value="Remove from Watchlist"/>
        }else {
            return (
                <input type="submit" onClick={ this.handleClick } value="Add to Watchlist"/>
        )}
    }
  
}

export default WatchlistButton;