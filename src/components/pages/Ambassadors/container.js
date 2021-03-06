import {connect} from 'react-redux';
import Page from './page'
import {bindActionCreators} from 'redux'
import {openPopup} from 'store/entities/navigation/actions'

function mapStateToProps(state) {
  const {entities} = state.ambassadors
  const countries =
    entities
      .map(v => v.country)
      .filter((v, i, a) => a.indexOf(v) === i)

  return {entities, countries};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({openPopup}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);