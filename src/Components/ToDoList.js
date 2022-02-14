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

    render() {
        const checkedItems = this.props.items.filter(item => item.checked).length;

        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <CheckList items={this.props.items} onItemChanged={this.onItemChanged} removeItem={this.removeItem}/>
                        <input type="text" value={this.state.value} onChange={this.updateValue}/>
                        <Button variant="primary" onClick={this.onItemAdded}>Add</Button>
                        <p>Progress: {checkedItems}/ {this.props.items.length}</p>
                    </Card.Body>
                </Card>
                <br/>
            </div>
        )
    }
}