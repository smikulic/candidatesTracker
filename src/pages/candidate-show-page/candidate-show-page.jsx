import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { RootStyle, PaperStyle } from '../../lib/styles';
const flatten = require('flat');

const styles = theme => ({
  root: RootStyle,
  paper: PaperStyle(theme),
  candidateWrapperStyle: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  reportRowStyle: {
    fontWeight: 600,
    paddingLeft: 0,
    paddingRight: 0,
  },
  tableStyle: {
    minWidth: 100,
    marginTop: '1.2rem',
  },
});

class CandidateShowPage extends Component {
  render() {
    const { classes, candidate } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.candidateWrapperStyle}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Candidate Info</h2>
                <Table className={classes.tableStyle}>
                  <TableBody>
                  { candidate && (
                    Object.keys(flatten(candidate)).map(key => {
                      if (!key.includes('report')) {
                        return (
                          <TableRow key={key}>
                            <TableCell component="th" scope="row" className={classes.reportRowStyle}>
                              {key}
                            </TableCell>
                            <TableCell>
                              {candidate[key] || 'N/A'}
                            </TableCell>
                          </TableRow>
                        );
                      } else {
                        return null;
                      }
                    })
                  )}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Candidate Reports</h2>
                <Table className={classes.tableStyle}>
                  <TableBody>
                  { candidate && (
                    Object.keys(flatten(candidate)).map(key => {
                      if (key.includes('report')) {
                        return (
                          <TableRow key={key}>
                            <TableCell component="th" scope="row" className={classes.reportRowStyle}>
                              {key}
                            </TableCell>
                            <TableCell>
                              {candidate[key] || 'N/A'}
                            </TableCell>
                          </TableRow>
                        );
                      } else {
                        return null;
                      }
                    })
                  )}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

CandidateShowPage.propTypes = {
  classes: PropTypes.object.isRequired,
  candidate: PropTypes.object.isRequired,
};

export default withStyles(styles)(CandidateShowPage);
