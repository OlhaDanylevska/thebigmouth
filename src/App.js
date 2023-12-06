import {useAuth0} from "@auth0/auth0-react";
import { Grid } from "@mui/material";
import {createContext, useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import {getUserById} from "./api/users";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.js";

// Create the context
export const MyContext = createContext();

function MyContextProvider({ children }) {
    const {user} = useAuth0();
    const [contextValue, setContextValue] = useState({userRole: null});

    useEffect(() => {
       if(user){
           getUserById(user?.sub).then(data => setContextValue({userRole: data.user?.Role}));
       }
    }, [user]);
    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

function App() {
  return (
    <MyContextProvider>
    <Grid
      container
      display="flex"
      direction="column"
      id="root"
      style={{
        paddingTop: 60,
        minHeight: "100dvh",
        flexWrap: "nowrap",
      }}
    >
      <NavBar />
      <main style={{ display: "flex", flexDirection: "column", flexGrow: 1, maxWidth: "100%" }}>
        <Outlet />
      </main>
      <Footer/>
    </Grid>
    </MyContextProvider>
  );
}

export default App;
