import React from "react"
import { CounterDisplay } from "./counterdisplay";


export class Counter extends React.Component{
  state={
    interval: this.props.intervalValue,
    increment: this.props.incrementValue,
    count: 0,
  }
    constructor(props) {
        super(props);
        setInterval(() => {
          this.setState((state) => { 
            return {
              count: state.count + this.state.increment,
            }
          })
        }, this.state.interval);
      }
    
  
    render(){
        return(
          <CounterDisplay countValue={this.state.count}/>
        )
    }
}