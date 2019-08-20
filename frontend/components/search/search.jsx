import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value: '',
            loggedIn: this.props.loggedIn
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e){
        e.preventDefault();
        this.setState({ value: e.target.value });
        this.props.getSearchResults(e.target.value);
        const searchResults = document.querySelector( ".result-drop-ul" );
        if ( this.state.value !== '' ) {
            searchResults.classList.add( "zindex" );
        } else {
            searchResults.classList.remove( "zindex" );
        }
    
        
    }

    handleClick(e){
        e.preventDefault();
    }

    render (){
        let results
        if(this.props.results.length && this.state.value!==''){
          results = this.props.results.map( result => {
            return (
                <li className={ this.props.loggedIn ? "result-li": "result-li-logout"} key={ result.ticker }>
                    <Link to={ `/companies/${ result.ticker }` } id="search-link">
                        <div id="search-result-ticker">{ result.ticker }</div>
                        <div id="search-result-company">{ result.company_name }</div>
                    </Link>
                </li>
            )
        } )}
        
        return (
            <div className={ this.state.loggedIn ? "search-black" : "default-searchbar"}>
                <img src={ this.state.loggedIn? window.images.magwhite : window.images.maggrey } className="magwhite" />
                <form  className="search-form">
                        <input onClick={this.handleClick} 
                        onChange={ this.handleSearch }
                        type="search" placeholder="Search" 
                        className={ this.state.loggedIn ? "search-input-black" : "search-input" }
                        value={this.state.value} />
                </form>
                <ul className={ this.state.loggedIn ? "result-drop-ul" : "result-drop-ul-logout"}>
                    {results}
                </ul>
            </div>
            )
        }
}

export default Search;