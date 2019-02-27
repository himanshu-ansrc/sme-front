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
import * as actions from '../actions'
import CONFIG from '../../config';
import Header from './Header';


const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
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

  // componentDidMount(){
  //   this.props.authenticate(localStorage.getItem(CONFIG.TOKEN));
  // }
  componentWillMount(){
      if(localStorage.getItem(CONFIG.TOKEN))
       this.props.authenticate(localStorage.getItem(CONFIG.TOKEN), ()=>{
            this.setState({toDashboard: true})
       });
  }
  // componentDidMount(){
  //   if(localStorage.getItem(CONFIG.TOKEN))
  //      this.props.authenticate(localStorage.getItem(CONFIG.TOKEN), ()=>{
  //           this.setState({toDashboard: true})
  //      });
  // }
  clickSubmit = ()=>{
     this.props.login_user(this.state, ()=>{
         //SET TOKEN IN LOCAL STORAGE 
         localStorage.setItem(CONFIG.TOKEN, this.props.auth);
         this.setState({toDashboard: true})
     });
  }

  render() {
    const {classes} = this.props;
    if(this.state.toDashboard){
       return <Redirect to="/d" />;
    }
    return (
       <Fragment>
          <Header />
           <Card className={classes.card}>
           <CardContent>
             <Typography component="h2" variant="headline" className={classes.title} gutterBottom>
               Sign In
             </Typography>
             <TextField id="email" type  ="text" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
             <TextField id="password" type="text" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
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
