import React from "react";
import {CheckItem} from "./CheckItem";
import {Button} from "react-bootstrap";

export class CheckList extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChanged = this.onItemChanged.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.allChecked = this.allChecked.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);

    }

    onItemChanged(item) {
        this.props.onItemChanged(item);
    }
    removeItem(item) {
        this.props.removeItem(item);
    }

    allChecked() {
        this.props.allChecked();
    }

    deleteAllItems() {
        this.props.deleteAllItems();
    }

    render() {
        return (
            <div>
                {this.props.items.map(item => <CheckItem item={item} onItemChanged={this.onItemChanged}
                                                         removeItem={this.removeItem}/>)}
                <Button onClick={this.allChecked}>All done</Button>
                <Button onClick={this.deleteAllItems}>Delete all</Button>
            </div>

        )
    }
}
