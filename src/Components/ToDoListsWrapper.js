import React from "react";
import {ToDoList} from "./ToDoList";
import {Button} from "react-bootstrap";

export class ToDoListsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChanged = this.onItemChanged.bind(this);
        this.onItemAdded = this.onItemAdded.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.allChecked = this.allChecked.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.deleteAllLists = this.deleteAllLists.bind(this);
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

    deleteAllItems(index) {
        this.props.deleteAllItems(index);
    }

    deleteList(index) {
        this.props.deleteList(index);
    }

    deleteAllLists() {
        this.props.deleteAllLists();
    }

    render() {
        return (
            <div>
                {this.props.lists.map(list => <ToDoList {...list}  onItemAdded={this.onItemAdded}
                                                        onItemChanged={this.onItemChanged}
                                                        removeItem={this.removeItem}
                                                        allChecked={this.allChecked}
                                                        deleteAllItems={this.deleteAllItems}
                                                        deleteList={this.deleteList}
                />)}
                <Button onClick={this.deleteAllLists}>Delete all lists</Button>
                <br/>
                <br/>
            </div>
        )
    }
};
