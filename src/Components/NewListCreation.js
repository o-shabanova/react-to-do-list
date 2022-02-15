import React from "react";
import {Button} from "react-bootstrap";

export class NewListCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.createNewListName = this.createNewListName.bind(this);
        this.addNewList = this.addNewList.bind(this);
    }

    createNewListName(event) {
        this.setState({value: event.target.value});
    }

    addNewList() {
        console.log("list name:", this.state.value);
        this.props.addNewList(this.state.value);

    }

    render() {
        return(
            <div>
                <input type="text" placeholder="New list name" value={this.state.value} onChange={this.createNewListName}/>
                <Button onClick={this.addNewList}>Add new List</Button>
            </div>
        )
    }
}