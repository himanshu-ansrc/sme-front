import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../assets/css/style.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: "#fff"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class  ButtonAppBar extends Component{
  render(){
    const { classes } = this.props;
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography component="h2" variant="headline" className={classes.grow} gutterBottom>
              SME
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
