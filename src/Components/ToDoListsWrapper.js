import React from "react";
import {ToDoList} from "./ToDoList";

export class ToDoListsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChanged = this.onItemChanged.bind(this);
    }

    onItemChanged(item) {
        this.props.onItemChanged(item);
    }
    render() {
        return (
            <div>
                {this.props.lists.map(list => <ToDoList {...list} onItemChanged={this.onItemChanged}/>)}
            </div>
        )
    }
};
