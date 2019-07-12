import React from 'react';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e){
        e.preventDefault();
        
        this.props.getSearchResults(e.target.value).then(()=>this.showResults)
    }

    showResults(){

        if(!!(this.props.results.length)){
            this.props.results.map(result => {
            return (
                <li className="result-li" key={result.ticker}>
                    <Link to={`companies/${result.ticker}`}>
                        { result.ticker.toUpperCase() }
                        { result.company_name }
                    </Link>
                </li>
            )
            } )
        }
    }

    handleClick(e){
        e.preventDefault();
    }
    render (){

        return (
            <div className="search-black">
                <img src={ window.images.magwhite } className="magwhite" />
                <form  className="search-form">
                        <input onClick={this.handleClick} 
                        onChange={ this.handleSearch }
                        type="search" placeholder="Search" 
                        className="search-input-black" 
                        value={this.state.value} />
                </form>
                <ul className="result-drop-ul">
                {this.showResults}
                </ul>
            </div>
            )
        }
}

export default Search;