import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { RootStyle } from '../../lib/styles';

const styles = {
  root: RootStyle,
  flex: {
    flex: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '1rem',
  },
  appBarStyle: {
    background: '#417BB9',
  },
};

class Navigation extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBarStyle}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Checkr
              <Link to="/" className={classes.link}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/candidates" className={classes.link}>
                <Button color="inherit">Candidates</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
