import React from "react";
import {ToDoList} from "./ToDoList";

export class ToDoListsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChanged = this.onItemChanged.bind(this);
        this.onItemAdded = this.onItemAdded.bind(this);
    }

    onItemChanged(item) {
        this.props.onItemChanged(item);
    }

    onItemAdded(newItem) {
        this.props.onItemAdded(newItem);
    }

    render() {
        return (
            <div>
                {this.props.lists.map(list => <ToDoList {...list}  onItemAdded={this.onItemAdded} onItemChanged={this.onItemChanged}/>)}
            </div>
        )
    }
};
