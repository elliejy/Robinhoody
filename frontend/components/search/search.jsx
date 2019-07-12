import React from 'react';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.showResults = this.showResults.bind(this)
    }

    handleSearch(e){
        e.preventDefault();
        
        this.props.getSearchResults(e.target.value).then(()=>this.showResults)
    }

    showResults(){

        if(!!(this.props.results.length)){
            
        }
    }

    handleClick(e){
        e.preventDefault();
    }

    render (){
        let results
        if(! this.props.results){
          results = this.props.results.map( result => {
            return (
                <li className="result-li" key={ result.ticker }>
                    <Link to={ `companies/${ result.ticker }` }>
                        { result.ticker.toUpperCase() }
                        { result.company_name }
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