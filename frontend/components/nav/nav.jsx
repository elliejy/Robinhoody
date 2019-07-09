import GreetingContainer from '../greeting/greeting_container';


const Nav = {

    render(){
            
        return (
            <div className="loggedin">
                <header className="header">
                    <Link to="/" className="header-link">
                        <img src={ window.images.logowhite } className="logowhite" />
                        <div className="search-black">
                            <img src={ window.images.magwhite } className="magwhite" />
                            <input type="search" placeholder="Search" className="search-input-black" />
                        </div>
                        <GreetingContainer />
                    </Link>
                </header>
            </div>    
)}}



export default Nav;