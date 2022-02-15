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
        this.onItemAdded = this.onItemAdded.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.allChecked = this.allChecked.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
        this.deleteList = this.deleteList.bind(this);
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

    onItemAdded(newItem) {
        console.log(newItem);
        const list = this.state.data.find(item => item.listIndex === newItem.listIndex);
        const newList = {
            ...list,
            items: [...list.items, newItem]
        }
        const newArray = this.state.data.filter(item => item.listIndex !== newItem.listIndex);

        this.setState({
            data: [...newArray, newList].sort((a, b) => a.listIndex - b.listIndex)
        })
    }

    removeItem(removedItem) {
        console.log(removedItem);

        const changedList = this.state.data.find(item => removedItem.listIndex === item.listIndex);
        console.log("changedList:",  changedList);
        const removedItems = changedList.items.filter(item => item.label !== removedItem.label );

        const list = {
            ...changedList,
            items: removedItems
        };

        const newArray = this.state.data.filter(item => item.listIndex !== changedList.listIndex);
        this.setState({
            data: [...newArray, list].sort((a,b) => a.listIndex - b.listIndex)
        })
    }

    allChecked(allCheckedItemsListIndex) {
        console.log(allCheckedItemsListIndex);
        const changedList = this.state.data.find(item => allCheckedItemsListIndex === item.listIndex);
        const allChecked = changedList.items.map(item => {item.checked = true; return item});
        const list = {
            ...changedList,
            items: allChecked
        };
        const newArray = this.state.data.filter(item => allCheckedItemsListIndex !== item.listIndex);
        this.setState({
            data: [...newArray, list].sort((a,b) => a.listIndex - b.listIndex)
        })

    }

    deleteAllItems(allRemovedItemsListIndex) {
        console.log(allRemovedItemsListIndex);
        const changedList = this.state.data.find(item => allRemovedItemsListIndex === item.listIndex);
        const list = {
            ...changedList,
            items: []
        };
        const newArray = this.state.data.filter(item => allRemovedItemsListIndex !== item.listIndex);
        this.setState({
            data: [...newArray, list].sort((a,b) => a.listIndex - b.listIndex)
        })
    }

    deleteList(indexList) {
        console.log('indexList to delete:', indexList);
        const newArray = this.state.data.filter(item => indexList !== item.listIndex);
        this.setState({
            data: [...newArray].sort((a,b) => a.listIndex - b.listIndex)
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
                    <ToDoListsWrapper lists={this.state.data}
                                      onItemAdded={this.onItemAdded}
                                      onItemChanged={this.onItemChanged}
                                      removeItem={this.removeItem}
                                      allChecked={this.allChecked}
                                      deleteAllItems={this.deleteAllItems}
                                      deleteList={this.deleteList}/>
                </Container>
                <Footer todoListsCount={this.state.data.length}/>
            </>
        );
    }
}

