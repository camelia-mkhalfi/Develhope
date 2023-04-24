import React from "react";
import { FilteredList } from "./FilteredList";

export class App extends React.Component{
    render(){
        return <FilteredList items={[{id: "Mario", age: 16}, {id: "Camelia", age: 35}, {id: "Luca", age:12}, {id: "Elisa", age:53}, {id: "Carla", age:22}]}/>
    }
}