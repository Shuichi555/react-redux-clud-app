import React, { Component } from 'react';

// for redux
import { connect } from 'react-redux';

import _ from 'lodash';
import { Link } from 'react-router-dom';

// actions
import { readEvents } from '../actions';

class EventsIndex extends Component {

// action.readEvents関数を呼び出し
componentDidMount() {
  this.props.readEvents();
}

renderEvents() {
  return _.map(this.props.events, event => (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>
      <Link to={ `/events/${ event.id }` }>
      {event.title}
      </Link>
      </td>
      <td>{event.body}</td>
    </tr>
  ))
}
    
render() {
  return (
      <React.Fragment>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {this.renderEvents()}
      </tbody>
    </table>
      
    <Link to="/events/new">New Event</Link>
    </React.Fragment>
  )
 }
}

// reducerで定義したeventsを設定
const mapStateToProps = state => ({ events: state.events })

// importしたincre,decreの関数をdispatchする
// ↓↓↓このようにも書ける↓↓↓
/*
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})
*/
const mapDispatchToProps = ({ readEvents })


// connect
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
