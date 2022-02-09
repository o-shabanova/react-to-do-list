import React from "react";
import {CheckItem} from "./CheckItem";

export class CheckList extends React.Component {
   constructor(props) {
       super(props);
       this.onItemChanged = this.onItemChanged.bind(this);
   }

    onItemChanged(item) {
       console.log("CheckList component", item);
        this.props.onItemChanged(item);
    }



    render() {
        return (
            <div>
                {this.props.items.map(item => <CheckItem item={item} onItemChanged={this.onItemChanged}/>)}
            </div>
        )
    }
}
