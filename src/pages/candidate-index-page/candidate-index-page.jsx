import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { PaperStyle, RootStyle } from '../../lib/styles';

const styles = theme => ({
  root: RootStyle,
  paper: PaperStyle(theme),
});

class CandidateIndexPage extends Component {
  render() {
    const { classes, candidates } = this.props;
    console.log(candidates);

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            {candidates && (
              candidates.map(candidate => {
                return (
                  <div key={candidate.id}>{candidate.id}</div>
                );
              }))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CandidateIndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
  candidates: PropTypes.array.isRequired,
};

export default withStyles(styles)(CandidateIndexPage);
