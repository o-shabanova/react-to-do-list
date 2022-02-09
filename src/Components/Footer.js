import {Component} from "react";
import {Container, Navbar} from "react-bootstrap";

export const Footer = (props) => <Navbar fixed="bottom" bg="light">
    <Container>
        Lists: {props.todoListsCount}
    </Container>
</Navbar>