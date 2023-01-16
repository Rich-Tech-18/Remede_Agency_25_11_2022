import { useState } from "react";
import { useDispatch } from "react-redux";
import { editFormClick, nameState } from "../../store/Store";
import { updateProfil, loginAuthorization } from "../../services/authAPI";
import { getItem, addItem, removeItem } from "../../services/LocalStorage";
import './EditForm.css';

const EditForm = ({lastName, firstName}) => {
    const dispatch = useDispatch();
    const tokenJSON = JSON.parse(getItem('tokenUser'));
    const [edit, setEdit] = useState({
        firstName : "",
        lastName : ""
      })

      const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        
        setEdit({...edit, [name] : value});
      }

      const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editFormClick())
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await updateProfil(edit, tokenJSON.token);
            // removeItem('lastNameUser');
            // removeItem('firstNameUser');
            removeItem("infoUser")
            const data = await loginAuthorization(tokenJSON.token);
            addItem("infoUser", JSON.stringify(data.data.body));
            const infoUserJSON = JSON.parse(getItem("infoUser"));
            dispatch(editFormClick());
            dispatch(nameState(infoUserJSON.firstName));
        }
        catch(response){
            console.log(response)
        }
        
    }

    return(
        <div >
            <form >
                <div className="flex">
                   <div className="input-wrapper">
                    <label htmlFor="firtName"></label><input type="text" id="firstName" name="firstName" placeholder={firstName} onChange={handleChange}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastName"></label><input type="text" id="lastName" name="lastName" placeholder={lastName} onChange={handleChange}/>
                </div> 
                </div>
                
                <div>
                    <button className="edit-button" onClick={handleEdit}>retour</button>
                    <button className="edit-button" onClick={handleSubmit}>Envoyer</button>  
                </div>
                
            </form>
        </div>
    )
};


export default EditForm;