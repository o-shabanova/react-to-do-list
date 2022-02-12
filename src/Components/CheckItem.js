import React from "react";
import {Form} from "react-bootstrap";

export class CheckItem extends React.Component {
constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
}

onChange() {
    console.log("item: ", this.props.item)
    this.props.onItemChanged(this.props.item);
}



    render() {
        return (
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={this.props.item.label} checked={this.props.item.checked}
                            onChange={this.onChange}/>
            </Form.Group>
        )
    }
}
