import React from "react";
import {Button, Form} from "react-bootstrap";

export class CheckItem extends React.Component {
constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
}

onChange() {
    console.log("item: ", this.props.item);
    this.props.onItemChanged(this.props.item);
}

removeItem() {
    console.log("remove:", this.props.item);
    this.props.removeItem(this.props.item);
}



    render() {
        return (
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={this.props.item.label} checked={this.props.item.checked}
                            onChange={this.onChange}/>
                <Button onClick={this.removeItem}>Remove</Button>
            </Form.Group>
        )
    }
}
