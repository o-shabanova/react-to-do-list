import React from "react";
import {Button, Card} from "react-bootstrap";
import {CheckList} from "./CheckList";


export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.updateValue = this.updateValue.bind(this);
        this.onItemChanged = this.onItemChanged.bind(this);
        this.onItemAdded = this.onItemAdded.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.allChecked = this.allChecked.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
        this.deleteList = this.deleteList.bind(this);

    }



    onItemChanged(item) {
        this.props.onItemChanged(item);
    }

    removeItem(item) {
        this.props.removeItem(item);
    }

    onItemAdded() {
        const newItem = {
            label: this.state.value,
            checked: false,
            index: this.props.items.length,
            listIndex: this.props.listIndex
        };
        this.props.onItemAdded(newItem);
    }

    updateValue(event) {
        this.setState({value: event.target.value});
    }

    allChecked() {
        this.props.allChecked(this.props.listIndex);
    }

    deleteAllItems() {
        this.props.deleteAllItems(this.props.listIndex);
    }

    deleteList() {
        this.props.deleteList(this.props.listIndex)
    }

    render() {
        const checkedItems = this.props.items.filter(item => item.checked).length;

        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Button onClick={this.deleteList}>Delete list</Button>
                        <br/>
                        <br/>
                        <CheckList items={this.props.items}
                                   onItemChanged={this.onItemChanged}
                                   removeItem={this.removeItem}
                                   allChecked={this.allChecked}
                                   deleteAllItems={this.deleteAllItems}

                        />
                        <br/>
                        <input type="text" placeholder="New task name" value={this.state.value} onChange={this.updateValue}/>
                        <Button variant="primary" onClick={this.onItemAdded}>Add</Button>
                        <p>Progress: {checkedItems}/ {this.props.items.length}</p>
                    </Card.Body>
                </Card>
                <br/>
            </div>
        )
    }
}