import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Candidates from '../../patterns/molecules/candidates';
import { RootStyle } from '../../lib/styles';

const styles = {
  root: RootStyle,
  candidatesWrapperStyle: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
};

class CandidateIndexPage extends Component {
  render() {
    const { classes, candidates } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.candidatesWrapperStyle}>
          <Grid container spacing={24}>
            <Candidates type="pending" candidates={candidates.pending} />
            <Candidates type="considering" candidates={candidates.considering} />
            <Candidates type="onHold" candidates={candidates.onHold} />
          </Grid>
        </div>
      </div>
    );
  }
}

CandidateIndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
  candidates: PropTypes.object.isRequired,
};

export default withStyles(styles)(CandidateIndexPage);
