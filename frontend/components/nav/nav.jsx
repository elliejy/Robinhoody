import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search/search_container';

const Nav = {

    render(){
            
        return (
            <div className="loggedin">
                <header className="header">
                    <Link to="/" className="header-link">
                        <img src={ window.images.logowhite } className="logowhite" />
                        <SearchContainer />
                        <GreetingContainer />
                    </Link>
                </header>
            </div>    
)}}



export default Nav;