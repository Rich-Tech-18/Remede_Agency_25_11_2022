import "./UserHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../services/LocalStorage";
import { editFormClick } from "../../store/Store";
import EditForm from "../EditForm/EditForm";

const UserHeader = () => {
  // const firstName = getItem('firstNameUser');
  // const lastName = getItem('lastNameUser');
  const infoUserJSON = JSON.parse(getItem("infoUser"));
  const dispatch = useDispatch();
  const editState = useSelector((state) => state.editForm);
  
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editFormClick())
  };
    return (
        <div className="header">
        
        <h1>Welcome back<br />
        {infoUserJSON === null ? null : editState === true ? <EditForm firstName={infoUserJSON.firstName} lastName={infoUserJSON.lastName}/> : infoUserJSON.firstName + ' ' + infoUserJSON.lastName + '!'}
        {/* {editState === true ? <EditForm firstName={infoUserJSON.firstName} lastName={infoUserJSON.lastName}/> : infoUserJSON.firstName + ' ' + infoUserJSON.lastName + '!'} */}
        </h1>
        {editState === true ? '': <button className="edit-button" onClick={handleEdit}>Edit Name</button>}
      </div>
    )
}

export default UserHeader;