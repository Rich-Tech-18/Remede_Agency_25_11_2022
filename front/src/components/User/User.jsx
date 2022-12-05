import Background from "../Background/Background";
import UserDiv from "../UserDiv/UserDiv";
import "./User.css";

const User = () => {
    return (
        <Background content={<UserDiv />}/>
    )
}

export default User;