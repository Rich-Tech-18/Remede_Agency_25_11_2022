import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { logout } from '../../services/authAPI';
import { authenticated } from '../../store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../services/LocalStorage';
import './SignIn.css';


const SignIn = () => {
    const dispatch = useDispatch();
    const authenticatedState = useSelector((state) => state.isAuthenticated);
    const name = useSelector((state) => state.firstName);
    const firstName = getItem('firstNameUser');
    // const  isAuthenticated  = useContext(Auth);
    const navigate = useNavigate();
    const handleLogOut =(e) => {
        e.preventDefault();
        logout();
        // isAuthenticated.setIsAuthentificated = false;
        dispatch(authenticated());
        navigate("/", {replace:true});
        // window.location.reload();
    }
    
 
   
    return (
      
        <div>
            
            {(authenticatedState && (
            <>
                    <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                    {name}
                </Link>
                <Link  className="main-nav-item" onClick={handleLogOut}>
                    <i className="fa fa-sign-out"></i>Sign Out
                </Link>
            </>
            )) || (
                <>
                <Link to="/sign-in" className="main-nav-item">
                <i className="fa fa-user-circle"></i>Sign In
            </Link>
            </>
            )}
            
            
        </div>
    )
}


export default SignIn;