import { connect } from 'react-redux';
import CandidateShowPage from '../../pages/candidate-show-page';

const mapStateToProps = state => ({
  candidate: state.appState.candidate,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CandidateShowPage);
