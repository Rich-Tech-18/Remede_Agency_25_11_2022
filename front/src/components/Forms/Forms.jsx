import { useNavigate } from "react-router-dom" ;
import { useState } from "react";
import { login, loginAuthorization } from "../../services/authAPI";
import { addItem, getItem } from "../../services/LocalStorage";
import { useDispatch } from "react-redux";
import { authenticated, nameState } from "../../store/Store";
import './Forms.css';


const Forms = () => {
  // const  isAuthenticated  = useContext(Auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [connect, setConnect] = useState({
    email : "",
    password : ""
  })

 
  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    
    setConnect({...connect, [name] : value})

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(connect);
      if(response.status === 200){
        // addItem('tokenUser', response.data.body.token);
        addItem('tokenUser', JSON.stringify(response.data.body));
        const tokenJSON = JSON.parse(getItem('tokenUser'));
        const data = await loginAuthorization(tokenJSON.token);
        addItem("infoUser", JSON.stringify(data.data.body));
        // addItem('idUser', data.data.body.id);
        // addItem('firstNameUser', data.data.body.firstName);
        const userJSON = JSON.parse(getItem("infoUser"));
        // const getName = data.data.body.firstName;
        // addItem('lastNameUser', data.data.body.lastName);
        // addItem('mailUser', data.data.body.email);
        dispatch(authenticated());
        dispatch(nameState(userJSON.firstName));
        navigate('/profile', {replace:true});
      }
    } catch (response){
      console.log(response)
    }
  }


    return(
    <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
             <div className="input-wrapper">
                <label htmlFor="username">Username</label><input type="text" id="username" name="email" onChange={handleChange}/>
            </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label><input type="password" id="password" name="password" onChange={handleChange}/>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
      </div>
      {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
      {/* <Link to="/user" className="sign-in-button">Sign In</Link> */}
      {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
      <button className="sign-in-button">Sign In</button>
      {/* <!--  --> */}
      </form>
    </section>
       
    )
}


export default Forms;