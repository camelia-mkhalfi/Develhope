import React from "react"

export class Counter extends React.Component{
    state={
        count: 0
    };

    increment(){
        setInterval(() => {
            this.setState(prevState => ({ count: prevState.count + 1 }));
        }, 1000);
    }
  
    render(){
        this.increment();
        return(
            <h1>Count: {this.state.count}</h1>
        )
    }
}