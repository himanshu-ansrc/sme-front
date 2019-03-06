import React, {Component, Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  textCenter: {
    textAlign : 'center'
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  },
  formControl:{
     width: '100%'
  }
})


class SearchCandidates extends Component{
   constructor(){
     super();
     this.state = {
          skills : 'Choose skills',
          job_title : 'Choose title',
          experience : 'Choose experience',
          location: 'location'
     }
   }
   handleChange = event => {
     this.setState({ [event.target.name]: event.target.value });
   };
   render(){
      const {classes} = this.props;
      console.log(classes)
      return (
        <Fragment>
          <Card className={classes.card}>
           <CardContent>
            <Typography variant="h6" gutterBottom>
              SEARCH CANDIDATES  
            </Typography>
            <Grid container spacing={24}>

            <Grid item xs={12} sm={6}>
               <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Skills</InputLabel>
                    <Select
                      value={this.state.skills}
                      onChange={this.handleChange}
                      fullWidth
                      inputProps={{
                        name: 'skills'
                      }}
                    >
                      <MenuItem value={this.state.skills}>
                        <em>Choose skills</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Job title</InputLabel>
                    <Select
                      value={this.state.job_title}
                      onChange={this.handleChange}
                      fullWidth
                      inputProps={{
                        name: 'job_title'
                      }}
                    >
                    <MenuItem value={this.state.job_title}>
                      <em>Choose title</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Location</InputLabel>
                    <Select
                      value={this.state.location}
                      onChange={this.handleChange}
                      fullWidth
                      inputProps={{
                        name: 'location'
                      }}
                    >
                    <MenuItem value={this.state.location}>
                      <em>Choose location</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Total experience</InputLabel>
                    <Select
                      value={this.state.experience}
                      onChange={this.handleChange}
                      fullWidth
                      inputProps={{
                        name: 'experience'
                      }}
                    >
                    <MenuItem value={this.state.experience}>
                      <em>Choose total exp</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>




          <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Highest Qualification</InputLabel>
                    <Select
                      value={this.state.experience}
                      onChange={this.handleChange}
                      fullWidth
                      inputProps={{
                        name: 'experience'
                      }}
                    >
                    <MenuItem value={this.state.experience}>
                      <em>Choose Highest Qualification</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
           </Grid>
           </CardContent>
           <CardActions>
                 <Button color="primary" variant="contained" onClick={this.clickSubmit} className={classes.submit}>Search</Button>
           </CardActions>
         </Card>
        </Fragment>
    )
   }
}

SearchCandidates.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchCandidates)
