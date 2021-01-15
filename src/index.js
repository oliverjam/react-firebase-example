import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import Basic from "./basic/index.js";
import Context from "./context/index.js";

const views = {
  basic: <Basic />,
  context: <Context />,
};

function App() {
  const [view, setView] = React.useState(() => {
    const { searchParams } = new URL(location.href);
    return searchParams.get("example") || "basic";
  });
  React.useEffect(() => {
    history.replaceState(null, null, "?example=" + view);
  }, [view]);
  return (
    <main>
      <nav>
        <label htmlFor="choose" style={{ display: "block" }}>
          Choose example
        </label>
        <select
          id="choose"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          {Object.keys(views).map((key) => (
            <option>{key}</option>
          ))}
        </select>
      </nav>
      <hr />
      {views[view] || <div>No example found</div>}
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
