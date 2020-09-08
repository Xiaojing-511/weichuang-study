import React, { Component } from 'react';
import store from './store'
import { add, minus ,addStr} from './action'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h1>react-redux</h1>
        {/* 触发action */}
        <button onClick={() => { store.dispatch(add()) }} >add</button>
        <p>count: {store.getState().count} </p>

        <button onClick={()=>{this.props.add()}} >add</button>
        <button onClick={this.props.add} >add</button>
        {/* <p>count: {this.props.count} </p> */}


        {/* <button onClick={this.props.minus} >minus</button> */}

        <button onClick={()=>{this.props.addStr('ha')}}>str++</button>
        <p>str: {this.props.str}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    str: state.str
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    minus: () => dispatch(minus()),
    addStr: (str)=>dispatch(addStr(str))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)