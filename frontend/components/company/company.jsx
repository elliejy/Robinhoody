import React from 'react';




class StockShow extends React.Component {
    componentDidMount() {
        const ticker = this.props.match.params.ticker;
        if ( !this.props.stock ) {
            this.props.fetchStock( ticker );
        }
    }

    render(){
        return (
            console.log(this.props)
        )
    }
}

export default StockShow;
