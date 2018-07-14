import { connect } from 'react-redux';
import CandidateIndexPage from '../../pages/candidate-index-page';

const mapStateToProps = state => ({
  candidates: state.appState.candidates,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CandidateIndexPage);
