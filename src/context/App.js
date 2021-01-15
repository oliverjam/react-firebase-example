import * as React from "https://cdn.skypack.dev/react@17.0.1";
import { useAuth } from "./AuthContext.js";

function App() {
  // hook provides access to this state for any component
  // without having to pass props down
  const authStatus = useAuth();

  if (authStatus === "loading") return <div>Loading...</div>;

  if (authStatus === "loggedIn")
    return (
      <>
        <h2>Welcome back {firebase.auth().currentUser}</h2>
        <button onClick={firebase.auth().logOut}>Log out</button>
      </>
    );

  return (
    <>
      <h2>Log in</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const email = event.target.email.value;
          firebase.auth().logIn(email);
        }}
      >
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default App;
