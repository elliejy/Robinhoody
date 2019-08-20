import {connect} from 'react-redux';
import { getSearchResults} from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) => {

    return{
    results: state.results,
    loggedIn: state.session.id === null ? false : true 
    }
}

const mapDispatchToProps = dispatch => ({
    getSearchResults: ( str ) => dispatch( getSearchResults(str))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search); 