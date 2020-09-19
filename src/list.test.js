import React from "react";
import ReactDOM from "react-dom";
import List from "./list";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const props = {
    cards: [
      { id: "a", title: "First card", content: "lorem ipsum" },
      { id: "b", title: "Second card", content: "hello world" },
    ],
  };
  const div = document.createElement("div");
  ReactDOM.render(<List cards={props.cards} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const props = {
    cards: [
      { id: "a", title: "First card", content: "lorem ipsum" },
      { id: "b", title: "Second card", content: "hello world" },
    ],
  };
  const tree = renderer.create(<List cards={props.cards} />).toJSON();
  expect(tree).toMatchSnapshot();
});
