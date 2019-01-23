import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './List';
import { fetchLists } from '../actions'
import { Grid } from 'semantic-ui-react';

class Lists extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  renderLists = () => {
    const { lists } = this.props;
    if(lists.length){
      return (
        lists.map(list =>
          <List key={list.nom} list={list}/>)
      );
    }
  }

  render() {    
    return (
      <Grid columns='equal'>
      {/* <div style={{"display":"flex"}}> */}
        {this.renderLists()}
      {/* </div> */}
        
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(mapStateToProps,{ fetchLists })(Lists)
