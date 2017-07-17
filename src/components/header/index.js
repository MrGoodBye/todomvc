import header from './header.js'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    };
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(header)
