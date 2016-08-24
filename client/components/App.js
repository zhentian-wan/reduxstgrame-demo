import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actionCreator';
import Main from './Main';

function mapStateToProps(state){
    return {
        posts: state.posts,
        commnets: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

// The idea to pass props and actions to Main Component is to use 'connect'.
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default App;