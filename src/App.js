import React, { Component } from "react";
import Store from "./store";
import List from "./list";
import "./app.css";

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  };
  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIDs.map((id) => store.allCards[id])}
            ></List>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
