// =============
//
// fake Firebase for example's sake
// waits 1 second then calls your callback with a fake user
// you can totally ignore this implementation
//
// =============

const fb = {
  initializeApp() {
    let currentUser = localStorage.getItem("fake-user");
    const subscriptions = new Set();
    function runSubscriptions() {
      subscriptions.forEach((cb) => cb(currentUser));
    }
    function logIn(email) {
      localStorage.setItem("fake-user", email);
      currentUser = email;
      runSubscriptions();
    }
    function logOut() {
      localStorage.removeItem("fake-user");
      currentUser = null;
      runSubscriptions();
    }
    function onAuthStateChanged(cb) {
      subscriptions.add(cb);
      setTimeout(() => cb(currentUser), 1000);
      return () => console.log("unsub") || subscriptions.remove(cb);
    }
    return {
      auth() {
        return {
          subscriptions,
          currentUser,
          logIn,
          logOut,
          onAuthStateChanged,
          currentUser,
        };
      },
    };
  },
};

export default fb.initializeApp();
