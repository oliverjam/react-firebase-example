import * as React from "https://cdn.skypack.dev/react@17.0.1";
import App from "./App.js";

function Basic() {
  return (
    <>
      <h1>Basic example</h1>

      <p>
        This example uses React state to keep track of the authentication state.
        The <code>authStatus</code> value is initially "loading", since we don't
        know whether the user is logged in or not at first.
      </p>
      <p>
        Once the Firebase code has run it knows if there's an existing user in
        localStorage or not. It calls the callback we pass to{" "}
        <code>onAuthStateChanged</code> with that user (or null if there is no
        one logged in).
      </p>
      <p>
        We then set the <code>authStatus</code> value to either "loggedIn" or
        "loggedOut".
      </p>
      <p>
        This value determines what UI gets rendered by our app. In a real app
        you'd probably have a router here rather than single components.
      </p>
      <hr />
      <App />
    </>
  );
}

export default Basic;
