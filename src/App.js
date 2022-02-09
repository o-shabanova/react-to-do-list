import React from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import {Footer} from "./Components/Footer";
import {ToDoListsWrapper} from "./Components/ToDoListsWrapper";

const defaultData = [{
  title: "React",
  index: 0,
  items: [{
    label: "Start",
    checked: true,
    index: 0
  }, {
    label: "Components",
    checked: false,
    index: 0
  }, {
    label: "Lifecycle methods",
    checked: false,
    index: 0
  }]
}]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: defaultData
    };
    this.onItemChanged = this.onItemChanged.bind(this);
  }

  onItemChanged(state) {
    console.log("App Component", this.state.data.items)
  }


  render () {
    return (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">TODO App v.1.0</Navbar.Brand>
            </Container>
          </Navbar>
          <Container>
            <ToDoListsWrapper items={this.state.data} onItemChanged={this.onItemChanged}/>
          </Container>
          <Footer todoListsCount={this.state.data.length}/>
        </>
    );
  }
}

