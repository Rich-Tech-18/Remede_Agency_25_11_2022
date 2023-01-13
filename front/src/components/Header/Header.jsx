import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/img/argentBankLogo.png';
import SignIn from "../SignIn/SignIn";
import './Header.css';
import { useDispatch, useSelector } from "react-redux";
import { onload, nameState } from "../../store/Store";
import { getItem } from "../../services/LocalStorage";
import { useEffect } from "react";


const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  window.onload = () => {
    if(getItem('infoUser')){
      const userInfoJson = JSON.parse(getItem("infoUser"));
      dispatch(nameState(userInfoJson.firstName));
    }
    dispatch(onload());
  };
  useEffect(() => {
     if(isAuthenticated === true && location === '/login'){
    navigate('/profile');
  };
  if(isAuthenticated === false && location === '/profile'){
    navigate('/login');
  };
  });
 
  
    return (
        <header>
            <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <SignIn />
    </nav>
        </header>
    )
}

export default Header;