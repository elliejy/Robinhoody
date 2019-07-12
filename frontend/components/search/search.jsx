import React from 'react';
import { Link } from 'react-router-dom';


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
        this.setState({ value: e.target.value });
        this.props.getSearchResults(e.target.value)
    }

    handleClick(e){
        e.preventDefault();
    }

    render (){
        let results
        if(this.props.results.length){
          results = this.props.results.map( result => {
            return (
                <li className="result-li" key={ result.ticker }>
                    <Link to={ `companies/${ result.ticker }` }>
                        <div id="search-result-ticker">{ result.ticker }</div>
                        <div id="search-result-company">{ result.company_name }</div>
                    </Link>
                </li>
            )
        } )}
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
                    { results}
                </ul>
            </div>
            )
        }
}

export default Search;