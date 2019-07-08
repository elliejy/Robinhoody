import { connect } from 'react-redux';
import Company from './company';
import { logout } from '../../actions/session_actions';
import {
    fetchStock,
    fetchStockInfo,
} from '../../actions/company_actions';

const mapStateToProps = ( state, ownProps ) => {
    return {
        company: state.entities.companies[ownProps.match.params.ticker],
        currentUser: state.session.id
    };
};

const mapDispatchToProps = dispatch => ( {
    fetchStock: ticker => dispatch( fetchStock( ticker ) ),
    fetchStockInfo: ticker => dispatch( fetchStockInfo( ticker ) ),
    logout: () => dispatch(logout())
} );

export default connect( mapStateToProps, mapDispatchToProps )( Company );
