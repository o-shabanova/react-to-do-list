import React from "react";
import {ToDoList} from "./ToDoList";

export class ToDoListsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChanged = this.onItemChanged.bind(this);
        this.onItemAdded = this.onItemAdded.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.allChecked = this.allChecked.bind(this);
    }

    onItemChanged(item) {
        this.props.onItemChanged(item);
    }

    onItemAdded(newItem) {
        this.props.onItemAdded(newItem);
    }

    removeItem(item) {
        this.props.removeItem(item);
    }

    allChecked(index) {
        this.props.allChecked(index);
    }

    render() {
        return (
            <div>
                {this.props.lists.map(list => <ToDoList {...list}  onItemAdded={this.onItemAdded} onItemChanged={this.onItemChanged}
                                                        removeItem={this.removeItem} allChecked={this.allChecked}/>)}
            </div>
        )
    }
};
