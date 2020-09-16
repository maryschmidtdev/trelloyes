import React, { Component } from "react";
import Store from "./store";
import List from "./list";
import "./app.css";

class App extends Component {
  static defaultProps = {
    Store: {
      lists: [],
      allCards: {},
    },
  };
  render() {
    const { Store } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>
        <div className="App-list">
          {Store.lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => Store.allCards[id])}
            ></List>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
