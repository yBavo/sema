import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './List';
import { fetchLists } from '../actions'

class Lists extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  renderLists = () => {
    const { lists } = this.props;
    if(lists.length > 0){
      return lists.map(list =>
        <List key={list.nom} title={list.nom}/>
      );
    }
  }

  render() {
    
    
    return (
      <div>
        {this.renderLists()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(mapStateToProps,{ fetchLists })(Lists)
