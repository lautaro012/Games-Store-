import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './Components/Landing_Page/LandingPage.jsx'
import NavBar from './Components/Nav_bar/Nav_bar';
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { actualizarCart, actualizarFav, savePageGlobal } from './redux/Actions/Index';
// import About from './Components/About_Us/About.jsx'
// import Home from './Components/Home/Home.jsx'
// import Games from './Components/Games/Games';
// import GameDetail from './Components/Game_Details/GameDetails.jsx'
// import CreateVideogame from './Components/CreateVideogame/CreateVideogames.jsx';
// import Admin from './Components/Admin/Admin';
// import { Profile } from './Components/Profile/Profile';
// import UserSign from './Components/UserSign/UserSign';
// import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
// import Cart from './Components/Cart/Cart.jsx';
// import Favoritos from './Components/Favoritos/Favoritos.jsx'
// import EditVideogame from './Components/CreateVideogame/EditVideogame/EditVideogames';
// import { FormularioPago } from './Components/FormularioPago/FormularioPago';
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js"
// const stripePromise = loadStripe("pk_test_51Lde2sJXnqrwcfODw8cWGGVzyavpCNgaUXMhWTAbkGIJ3txhY9PVGuUzy9QPzQ5riddbQZdRADa3QTHxqhrSeSZq00dWuMhBM2")



function App() {

  const [userLogged, setUserLogged] = useState(false)


  return (
    <Router>

      <NavBar userLogged={userLogged} setUserLogged={setUserLogged} />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>
      <Footer userLogged={userLogged} />
    </Router>
  );
}

export default App;