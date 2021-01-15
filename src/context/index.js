import * as React from "https://cdn.skypack.dev/react@17.0.1";
import { AuthProvider } from "./AuthContext.js";
import App from "./App.js";

function Context() {
  return (
    <>
      <h1>Context example</h1>
      <p>
        This example uses the exact same technique for keeping track of
        authentication state (using React state). However it uses React Context
        to pass this state down to all child components. This avoids having to
        manually "prop drill" by passing the state down over and over to deeply
        nested children.
      </p>
      <p>
        We create a new context called <code>AuthContext</code> and a component
        called <code>AuthProvider</code>. This component will wrap our entire
        application and "provide" the context value to all children. It also
        keeps track of the auth state (just like our <code>App</code> did
        before).
      </p>
      <p>
        Our provider component uses the <code>AuthContext.Provider</code>{" "}
        component (which is created by React when we make the context object) to
        wrap all its children. This takes a single prop—<code>value</code>—which
        is the value we want its children to access.
      </p>
      <p>
        These children can access the context value using the{" "}
        <code>React.useContext</code> hook and passing in the{" "}
        <code>AuthContext</code> object. It's nice to create a custom hook for
        this so you don't have to repeat yourself so much.
      </p>
      <hr />
      <AuthProvider>
        <App />
      </AuthProvider>
    </>
  );
}

export default Context;
