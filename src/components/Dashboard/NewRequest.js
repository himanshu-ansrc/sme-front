import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import {Link, Redirect} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import CONFIG from '../../../config';

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 2
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  }
})

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '', password: '' , toDashboard: false, toDashboard : false
    }
  }
  handleChange = name => event => {
  this.setState({[name]: event.target.value})
  }

  clickSubmit = ()=>{
  }

  render() {
    const {classes} = this.props;
    return (
       <Fragment>
           <Card className={classes.card}>
           <CardContent>
             <Typography component="h2" variant="headline" className={classes.title} gutterBottom>

             </Typography>
             <TextField id="email" type  ="text" label="Skills" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
             <TextField id="email" type  ="text" label="Qualification" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
             <TextField id="email" type  ="text" label="Budget" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
             <TextField id="password" type="text" label="Time" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
             <br/>
           </CardContent>
           <CardActions>
                 <Button color="primary" variant="contained" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
           </CardActions>
         </Card>
       </Fragment>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect((state)=>state, actions)(withStyles(styles)(Login))
