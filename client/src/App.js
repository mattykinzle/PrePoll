import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
import { useStoreContext } from './utils/GlobalStore';


function App() {
    // Our provider is setup in index.js so we can use the GlobalStore here easily.

    // Something we want to do at the beginning of the application is check if the user is logged in or not, if the user is, we'll
    // dispatch an action 
    const [state, dispatch] = useStoreContext();
    useEffect(() => {
        // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
    }, []);

    return (
        
            <Router>
                <div>
                    <Route path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    {
                        // Todo: make this a protected route based off of the context
                    }
                    <Route path="/members" component={Members} /> 
                    
                </div>
            </Router>
        </StoreProvider>
    );
}

export default App;
