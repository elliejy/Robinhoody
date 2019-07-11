import React from 'react';
import { asArray } from '../../reducers/selector';

class WatchlistButton extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.state={
        //     following: Boolean( this.props.company ? this.props.company.following : undefined),
        // }
        
    }
    handleSubmit( e ){
        e.preventDefault();

        if ( this.props.following){
            this.props.removeWatchlist( 
                this.props.watchlists[this.props.ticker.toLowerCase()].id 
            )
        } else {
            this.props.createWatchlist(this.props.ticker).then( () => this.setState( { following: true} ) )
            
        }

    }

    componentDidMount() {  
        // const watchlistArr = asArray( this.props.watchlists )
        // watchlistArr.map( watchlist => {
        //     if ( watchlist.ticker === this.props.ticker.toLowerCase() && watchlist.following !== this.state.following ) {
        //         if ( watchlist.following === true ) {
        //             this.setState( { following: true } )
        //         } else {
        //             this.setState( { following: false } )
        //         }
        //     }
        // } )
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