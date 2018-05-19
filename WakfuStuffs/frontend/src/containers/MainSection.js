import {connect} from 'react-redux';
import {wakfu} from '../actions';
import MainSection from '../components/MainSection'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
    return {
        stuffs: state.wakfu.stuffs,
        cpt: state.wakfu.cpt,
        page: state.wakfu.page,
        total: state.wakfu.total,
        size_page: state.wakfu.size_page,
        myFilter: state.wakfu.myFilter,
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(wakfu, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);