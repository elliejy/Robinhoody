import { connect } from 'react-redux';
import Company from './company';
import { logout } from '../../actions/session_actions';
import {
    fetchAllStockData,
    fetchStock,
    fetchStockInfo,
    fetch1mStock
} from '../../actions/company_actions';

const mapStateToProps = ( state, ownProps ) => {
    const ticker = ownProps.match.params.ticker
    return {
        company: state.entities.companies[ticker],
        ticker: ownProps.match.params.ticker
    };
};

const mapDispatchToProps = dispatch => ( {
    // fetchAllStockData: ticker => dispatch(fetchAllStockData(ticker)),
    fetchStock: ticker => dispatch( fetchStock( ticker ) ),
    fetch1mStock: ticker => dispatch ( fetch1mStock(ticker)),
    fetchStockInfo: ticker => dispatch( fetchStockInfo( ticker ) ),
    logout: () => dispatch(logout())
} );

export default connect( mapStateToProps, mapDispatchToProps )( Company );
