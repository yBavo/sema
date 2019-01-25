import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid, Table } from 'semantic-ui-react';
import { fetchUsersList, fetchRule } from '../actions';

class List extends Component {
  componentDidMount() {
    const listName = this.props.list.nom;
    
    this.props.fetchUsersList(listName);
    this.props.fetchRule(listName);
  }

  renderList(){
    const { users, list, rules } = this.props;
    
    if(users){
      
      return (
        <Table celled collapsing style={{"margin":0, "padding":0}}>
          <Table.Header>
            <Table.Row>
              {list.departements.map(d =>
                <Table.HeaderCell key={d}>{d}</Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {users.map((user, index) => 
            <Table.Row key={user+index}>
            {list.departements.map((d, index) =>
              <Table.Cell key={d+index}>{user.name}</Table.Cell>
            )}
            </Table.Row>
          )}
          </Table.Body>
        </Table>
      )
    }
  }
  
  render() {
   return (
    <Grid style={{"margin":0, "padding":0}}>
      {this.renderList()}
    </Grid>
    )
  }
}

const mapStatetoProps = ({users, rules}, {list}) => ({
  users: users[list.nom],
  rules: rules[list.nom]
})


export default connect(mapStatetoProps, {fetchUsersList, fetchRule} )(List);
