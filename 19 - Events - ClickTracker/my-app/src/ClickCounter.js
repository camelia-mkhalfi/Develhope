import React from "react"
import { CounterDisplay } from "./counterdisplay";

export class ClickCounter extends React.Component{
    state={
        interval: 1000,
        increment: 1,
        count: 0,
        tracker: ''
      }
      
      handleIncrement = (event) => {
        const value = event.target.value;
        this.setState((state) => {
          return {
            count: state.count + state.increment,
            tracker: value,
          }
        });
      }
        
    render(){
        return(
            <div>
            <CounterDisplay  count={this.state.count}/>
            <button  value="Button 1" onClick={this.handleIncrement}>Button 1</button>
            <button   value="Button 2" onClick={this.handleIncrement}>Button 2</button>
            <button  value="Button 3" onClick={this.handleIncrement}>Button 3</button>

            <h2>Click Tracker: {this.state.tracker} </h2> 


            </div>
        )
    }
}