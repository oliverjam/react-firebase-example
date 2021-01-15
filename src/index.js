import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import Basic from "./basic/App.js";

const views = {
  basic: <Basic />,
};

function App() {
  const [view, setView] = React.useState("basic");
  return (
    <main>
      <nav>
        <label htmlFor="choose" style={{ display: "block" }}>
          Choose example
        </label>
        <select id="choose" onChange={(e) => setView(e.target.value)}>
          {Object.keys(views).map((key) => (
            <option>{key}</option>
          ))}
        </select>
      </nav>
      <hr />
      {views[view]}
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
