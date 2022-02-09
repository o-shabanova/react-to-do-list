import React from "react";
import {ToDoList} from "./ToDoList";

export class ToDoListsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChanged = this.onItemChanged.bind(this);
    }

    onItemChanged(data) {
        console.log("ToDoWrapper component", data);
        this.props.onItemChanged(data);
    }
    render() {
        return (
            <div>
                {this.props.items.map(item => <ToDoList {...item} onItemChanged={this.onItemChanged}/>)}
            </div>
        )
    }
};
