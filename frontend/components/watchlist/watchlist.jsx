import React from 'react';


class Watchlist extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        const watchlists = this.props.fetchWatchlists()
        console.log( watchlists )
        this.ticker = this.props.ticker
        this.state={

        }
    }
    handleClick( e ){
        e.preventDefault();

        // this.props.createWatchlist(this.props.currentUserId, this.ticker)

    }

    componentDidMount() {  
        debugger
        this.props.fetchWatchlists(this.props.currentUserId ) 
        console.log( this.props.watchlists )
    }

    render(){ 
        return (
         <button onClick={this.handClick}><p id="addp">Add to Watchlist</p></button>
        )
    }
  
}

export default Watchlist;