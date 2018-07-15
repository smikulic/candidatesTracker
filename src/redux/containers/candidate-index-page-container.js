import { connect } from 'react-redux';
import { candidateShowEnter } from '../actions/candidate-actions';
import CandidateIndexPage from '../../pages/candidate-index-page';

const mapStateToProps = state => ({
  candidates: state.appState.candidates,
})

const mapDispatchToProps = dispatch => ({
  candidateShowEnter: id => dispatch(candidateShowEnter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CandidateIndexPage);
