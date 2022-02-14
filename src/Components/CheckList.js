import React from "react";
import {CheckItem} from "./CheckItem";

export class CheckList extends React.Component {
    constructor(props) {
        super(props);
        this.onItemChanged = this.onItemChanged.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onItemChanged(item) {
        this.props.onItemChanged(item);
    }
    removeItem(item) {
        this.props.removeItem(item);
    }

    render() {
        return (
            <div>
                {this.props.items.map(item => <CheckItem item={item} onItemChanged={this.onItemChanged} removeItem={this.removeItem}/>)}
            </div>

        )
    }
}
