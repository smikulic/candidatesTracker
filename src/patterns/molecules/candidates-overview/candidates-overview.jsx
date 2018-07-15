import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import SyncIcon from '@material-ui/icons/Sync';
import { PaperStyle } from '../../../lib/styles';

const styles = theme => ({
  paper: PaperStyle(theme),
  countStyle: {
    fontSize: '3rem',
  },
  typeStyle: {
    fontSize: '1rem',
  },
  consideringIconStyle: {
    position: 'relative',
    marginRight: '3px',
    background: 'white',
    fontSize: '18px',
    color: 'orange',
    top: '3px',
  },
  onHoldIconStyle: {
    position: 'relative',
    marginRight: '3px',
    background: 'white',
    fontSize: '18px',
    color: theme.palette.text.secondary,
    top: '3px',
  },
  pendingStyle: {
    color: theme.palette.text.secondary,
  }
});

class CandidatesOverivew extends Component {
  render() {
    const { classes, count, type } = this.props;
    let typeNode;

    switch(type) {
      case 'considering':
        typeNode = (
          <div>
            <ErrorIcon className={classes.consideringIconStyle} />
            Consider
          </div>
        );
        break;
      case 'onHold':
        typeNode = (
          <div>
            <ErrorIcon className={classes.onHoldIconStyle} />
            On Hold
          </div>
        );
        break;
      case 'pending':
      default:
      typeNode = (
        <div className={classes.pendingStyle}>
          <SyncIcon className={classes.onHoldIconStyle} />
          Pending
        </div>
      );
    };

    return (
      <div>
          <div className={classes.countStyle}>{count}</div>
          <div className={classes.typeStyle}>{typeNode}</div>
      </div>
    );
  }
}

CandidatesOverivew.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CandidatesOverivew);
