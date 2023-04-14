import React from "react"
import { CounterDisplay } from "./counterdisplay";

export class ClickCounter extends React.Component{
    state={
        interval: 1000,
        increment: 1,
        count: 0,
      }
      
      handleIncrement = () => {
        this.setState((state) => {
          return {
            count: state.count + state.increment
          }
        });
      }
        
    render(){
        return(
            <div>
            <CounterDisplay  count={this.state.count}/>
            <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}