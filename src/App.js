// Import des modules React
import './App.css';

// Import des modules React Router
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserIsConnected, setUserIsAdmin } from './actions/actions';
import React, { useEffect } from "react";

// Import des composants
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/BlogSingle';
import Contact from './components/Contact/ContactPage';
import Page404 from './components/Page404/Page404';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PiercingWorkSpace from './components/PiercingWorkSpace/PiercingWorkSpace';
import SignUp from './components/Login/SignUp';
import Shop from './components/Shop/Shop';
import TattooWorkShop from './components/TattooWorkShop/TattooWorkShop';
import UserAccount from './components/UserAccount/UserAccount';
import VisitorBook from './components/VisitorBook/VisitorBook';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const role = sessionStorage.getItem('roles');
    //console.log(role);
    //console.log(token);


    if ((token) && role === '["ROLE_ADMIN","ROLE_USER"]') {
      dispatch(setUserIsConnected(true));
      dispatch(setUserIsAdmin(true));
      //console.log('admin');
    }
    else if ((token) && role === '["ROLE_USER"]') {
      dispatch(setUserIsConnected(true));
      dispatch(setUserIsAdmin(false));
      //console.log('user');

    }
    else {
      dispatch(setUserIsConnected(false));
      dispatch(setUserIsAdmin(false));
      //console.log('rien');

    }
  }, [dispatch]);


  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/atelier-tatouage" element={<TattooWorkShop />} />
        <Route path="/espace-piercing" element={<PiercingWorkSpace />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/livre-d-or" element={<VisitorBook />} />
        <Route path="/actualites" element={<Blog />} />
        <Route path="/actualites/article" element={<BlogSingle />} />
        <Route path="/la-boutique" element={<Shop />} />
        <Route path="/profil" element={<UserAccount />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;