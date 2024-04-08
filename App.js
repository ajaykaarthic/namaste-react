import React from "react";
import ReactDOM from "react-dom/client";

// Create a nested header element using react.createElement()
// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, [
//     "hi",
//     React.createElement("h2", {}, [
//       "hi",
//       React.createElement("h3", {}, "hi")]),
//   ]),
// ]);

//creating
const header = (
  <div className="title">
    <h1>Hi from h1</h1>
    <h2>Hi from h2</h2>
    <h3>Hi from h3</h3>
  </div>
);

const title = <h1>Hello World</h1>;

const TitleComponent = () => <h1>Hello World</h1>;

// Component composition
const Headercomponent = () => (
  <div className="title">
    <TitleComponent></TitleComponent>
    <h2>Boom</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headercomponent />);
