import React, { Component } from 'react';

// for redux
import { connect } from 'react-redux'
// actions
import { increment, decrement } from '../actions'

class App extends Component {
/* reducerが受け持つので不要
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
*/

/* action creatorが受け持つので不要
handlePlusButton = () => {
  this.setState({ count: this.state.count + 1 })
}

handleMinusButton = () => {
  this.setState({ count: this.state.count - 1 })
}
*/

render() {
  // propsを使うため？
  const props = this.props;

  return (
    <React.Fragment>
      <div>value: { props.value }</div>
      <button onClick={ props.increment }> +1 </button>
      <button onClick={ props.decrement }> -1 </button>
    </React.Fragment>
   )
 }
}

const mapStateToProps = state => ({ value: state.count.value })

// importしたincre,decreの関数をdispatchする
// ↓↓↓このようにも書ける↓↓↓
// const mapDispatchToProps = ({ increment, decrement })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})


// connect
export default connect(mapStateToProps, mapDispatchToProps)(App)


//<div>count: { this.state.count }</div>
//<button onClick={this.handlePlusButton}> +1 </button>
//<button onClick={this.handleMinusButton}> -1 </button>


/*
class App extends Component {
  render() {
    return (
      <div>
          <h1>Welcome to React</h1>
      </div>
    );
  }
}

export default App;
*/
