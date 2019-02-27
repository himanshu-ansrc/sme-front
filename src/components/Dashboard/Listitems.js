import React, {Component, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {connect} from 'react-redux'

 class MainListItems extends Component{
   render(){
       console.log(this.props.admin)
       return(
          <Fragment>
              {!this.props.admin && 
               <div>
                <div className="memeimage-loader-container"><div id="memeimage-loader" className="loader-circular"></div></div>
               </div>
              } 
              
              {this.props.admin && this.props.admin['account_type']==1 && 
              <div>         
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Check New Request" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Search Candidates" />
                </ListItem>
              </div>
            }
            
            {this.props.admin && this.props.admin['account_type']==2 && 
              <div>    
                  <ListItem button>
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create New Request" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary="View All Requests" />
                  </ListItem>
              </div>
            }
          </Fragment>
       )
   }
}


export default connect(state=>state)(MainListItems)