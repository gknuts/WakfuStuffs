import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {wakfu} from '../actions';
import MainSection from '../components/MainSection'

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(wakfu, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);