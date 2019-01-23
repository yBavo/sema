import React, { Component } from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid, Table } from 'semantic-ui-react';
import { fetchUsers } from '../actions';

class List extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList(){
    const { users, list } = this.props;
    console.log(list)
    if(users.length){
      // const nColumns = list.departements.length;
      return (
        <Grid.Column style={{"padding":0}}>
        <Table celled style={{"margin":0, "padding":0}}>
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
        </Grid.Column>
      )
    } else {
      return null;
    }
  }
  
  render() {
   return (
      // <div className='ui header'>
      this.renderList()
      // </div>
    )
  }
}

const mapStatetoProps = ({users}, {list}) => {
  let l = {};
  if(users.length){
    l = users.filter(u => u.departement.filter(d => d === list.nom)[0] === list.nom);
  }
  console.log(list.nom,l)
  return {users: l}
}

export default connect(mapStatetoProps, {fetchUsers} )(List);
