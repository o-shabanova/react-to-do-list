import React from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import {Footer} from "./Components/Footer";
import {ToDoListsWrapper} from "./Components/ToDoListsWrapper";

const defaultData = [
    {
        title: "React",
        listIndex: 0,
        items: [{
            label: "Start",
            checked: true,
            index: 0,
            listIndex: 0
        }, {
            label: "Components",
            checked: false,
            index: 1,
            listIndex: 0
        }, {
            label: "Lifecycle methods",
            checked: false,
            index: 2,
            listIndex: 0
        }]
    }, {
        title: "Angular",
        listIndex: 1,
        items: [{
            label: "New 1",
            checked: true,
            index: 0,
            listIndex: 1
        }, {
            label: "New 2",
            checked: false,
            index: 1,
            listIndex: 1
        }, {
            label: "New 3",
            checked: false,
            index: 2,
            listIndex: 1
        }]
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: defaultData
        };
        this.onItemChanged = this.onItemChanged.bind(this);
    }

    onItemChanged(changedItem) {
        console.log('App component', changedItem);
        const changedList = this.state.data.find(item => changedItem.listIndex === item.listIndex);
        const changedItems = changedList.items.map(item => {
            if (item.index === changedItem.index) {
                item.checked = !item.checked;
            }
            return item;
        })

        const list = {
            ...changedList,
            items: changedItems
        }

        const newArray = this.state.data.filter(item => item.listIndex !== changedItem.listIndex);


        this.setState({
            data: [...newArray, list].sort((a, b) => a.listIndex - b.listIndex)
        })
    }


    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">TODO App v.1.0</Navbar.Brand>
                    </Container>
                </Navbar>
                <Container>
                    <ToDoListsWrapper lists={this.state.data} onItemChanged={this.onItemChanged}/>
                </Container>
                <Footer todoListsCount={this.state.data.length}/>
            </>
        );
    }
}

