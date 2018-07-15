import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CandidatesOverview from '../candidates-overview';
import { PaperStyle } from '../../../lib/styles';
import moment from 'moment';
const flatten = require('flat');

const styles = theme => ({
  paper: PaperStyle(theme),
  candidateStyle: {
    padding: '12px',
    marginLeft: '-12px',
    marginRight: '-12px',
    borderBottom: '1px solid #ccc',
    textAlign: 'left',
    fontSize: '0.9rem',
  },
  candidateNameStyle: {
    fontWeight: 600,
    paddingRight: 0,
    cursor: 'pointer',
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
  tableHeaderRowStyle: {
    height: '20px',
  },
  showReportsButtonStyle: {
    marginTop: '1rem',
    cursor: 'pointer',
    color: '#417BB9',
  },
});

class Candidates extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleOnCandidateClick = (candidateId) => {
    this.props.show(candidateId);
  };

  render() {
    const { classes, candidates, type } = this.props;
    let typeMessageNode;
    let reportsHeadingNode;

    switch(type) {
      case 'considering':
        typeMessageNode = 'Show Consider Reports';
        reportsHeadingNode = 'Consider Reports';
        break;
      case 'onHold':
        typeMessageNode = 'Show On Hold Reports';
        reportsHeadingNode = 'On Hold Reports';
        break;
      case 'pending':
      default:
        typeMessageNode = 'Show Pending Reports';
        reportsHeadingNode = 'Pending Reports';
    };

    return (
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <CandidatesOverview type={type} count={candidates.length} />
          <Table className={classes.tableStyle}>
            <TableHead>
              <TableRow className={classes.tableHeaderRowStyle}>
                <TableCell>Name</TableCell>
                <TableCell>Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates && (
                candidates.map(candidate => {
                  return (
                    <TableRow key={candidate.id}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.candidateNameStyle}
                        onClick={this.handleOnCandidateClick.bind(this, candidate.id)}
                      >
                        {candidate.name}
                      </TableCell>
                      <TableCell>
                        {moment(candidate.reports[0].updated_at).format("MM/DD/YY")}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
          <div className={classes.showReportsButtonStyle} onClick={this.handleClickOpen('paper')}>
            {typeMessageNode}
          </div>
        </Paper>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll="paper"
        >
          <DialogTitle id="scroll-dialog-title">{reportsHeadingNode}</DialogTitle>
          <DialogContent>
            <Table className={classes.tableStyle}>
              <TableBody>
              { candidates && (
                candidates.map(candidate => {
                  const formattedCandidateData = {
                    '': '',
                    'name': candidate.name,
                    ...flatten(candidate.reports[0])
                  };
                  return Object.keys(formattedCandidateData).map(key => {
                    return (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row" className={classes.reportRowStyle}>
                          {key}
                        </TableCell>
                        <TableCell>
                          {formattedCandidateData[key] || 'N/A'}
                        </TableCell>
                      </TableRow>
                    );
                  })
                })
              )}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
      </Grid>
    );
  }
}

Candidates.propTypes = {
  show: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  candidates: PropTypes.array.isRequired,
};

export default withStyles(styles)(Candidates);
