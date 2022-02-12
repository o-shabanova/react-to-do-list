import React from "react";
import {Button, Card} from "react-bootstrap";
import {CheckList} from "./CheckList";

export class ToDoList extends React.Component {
   constructor(props) {
       super(props);
       this.onItemChanged = this.onItemChanged.bind(this);
   }
    onItemChanged(item) {
        this.props.onItemChanged(item);
    }



    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <CheckList items={this.props.items} onItemChanged={this.onItemChanged}/>
                    <input/>
                    <Button variant="primary">Add</Button>
                </Card.Body>
            </Card>
        )
    }
}