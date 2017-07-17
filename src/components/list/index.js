import list from './list.js'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {dispatch}
}

const mapStateToProps = (state, ownProps) => {
    const {todos} = state;
    return {
        todos,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(list)
