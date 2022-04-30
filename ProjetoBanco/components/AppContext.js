import React from "react";

const AppContext = React.createContext({
  isSignedIn: false,
  userName: '',
  signIn: (user, password) => {},
  signOut: () => {}
});

export default AppContext;