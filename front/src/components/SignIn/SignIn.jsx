import { Link } from 'react-router-dom';
import './SignIn.css';


const SignIn = () => {
    const path = window.location.pathname;
    return (
      
        <div>
            <Link className={path === "/user" ? "main-nav-item" : "none"} to="/user">
            <i className="fa fa-user-circle"></i>
                Tony
            </Link>
            <Link to={path === "/user" ? "/" : "/sign-in"} className="main-nav-item" onClick={window.refresh}>
                <i className={path === "/user" ? "fa fa-sign-out" : "fa fa-user-circle"}></i>{path === "/user" ? "Sign Out" : "Sign In"}
            </Link>
        </div>
    )
}


export default SignIn;