import * as React from "https://cdn.skypack.dev/react@17.0.1";
import firebase from "../firebase.js";

function App() {
  // state initialised to "loading" since we don't yet know if we're logged in
  // we have to wait until the Firebase code has loaded and checked
  const [authStatus, setAuthStatus] = React.useState("loading");

  React.useEffect(() => {
    // firebase returns an unsubscribe fn
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      // if our callback is called with a user we know we're logged in
      setAuthStatus(user ? "loggedIn" : "loggedOut");
    });
    // return this fn tells React to run it if this component is ever removed
    return unsubscribe;
    // we don't want to keep creating new onAuthStateChanged listeners
    // empty array means the effect has no dependencies,
    // so it can run once after the component first renders
  }, []);

  // if Firebase loads fast you could just return null here
  // to avoid "Loading..." flashing really fast then going away
  if (authStatus === "loading") return <div>Loading...</div>;

  if (authStatus === "loggedIn")
    return (
      <>
        <h1>Welcome back {firebase.auth().currentUser}</h1>
        <button onClick={firebase.auth().logOut}>Log out</button>
      </>
    );

  return (
    <>
      <h1>Log in</h1>
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
