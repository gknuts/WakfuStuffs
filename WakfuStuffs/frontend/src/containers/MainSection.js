import {connect} from 'react-redux';
import {wakfu} from '../actions';
import MainSection from '../components/MainSection'

const mapStateToProps = state => {
    return {
        stuffs: state.wakfu,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStuffs: () => {
      dispatch(wakfu.fetchStuffs());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);