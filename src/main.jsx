import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Authentification from './pages/Authentification';
import Profiles from './pages/Profiles'
import Profile from './pages/Profile'
import CreateUser from './pages/CreateUser'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store ={store}>
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Authentification/>}/>
    <Route path ="*" element={<Authentification/>}/>
    <Route path ="/home" element={<Home/>}/>
    <Route path ="/auth" element={<Authentification/>}/>
    <Route path ="/profiles" element={<Profiles/>}/>
    <Route path ="/profile" element={<Profile/>}/>
    <Route path ="/createuser" element={<CreateUser/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
