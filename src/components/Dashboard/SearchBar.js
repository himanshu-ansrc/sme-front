import React, {Component} from 'react'
import SearchBar from 'material-ui-search-bar'
import {connect}  from 'react-redux'
import * as actions from '../../actions'

class SearchText extends Component{
    state = {
        keywords : ''
    }
    componentDidMount(){
           console.log(this.props)
    }
    listCandidates = (e)=>{
          this.props.candidates_list({});
    }
    render(){
        console.log(this.props.candidates)
        return(
           <SearchBar
            onRequestSearch={(e)=>this.listCandidates(e)}
            style={{
              margin: '0 auto',
              maxWidth: 1000
            }}
          />
        )
    }
}


export default connect(state=>state, actions)(SearchText);