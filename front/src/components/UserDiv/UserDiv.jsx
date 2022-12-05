import React from "react";
import UserHeader from "../UserHeader/UserHeader";
import UserAccount from "../UserAccount/UserAccount";


const UserDiv = () => {
    const data = [
        {title : "Argent Bank Checking (x8349)", amount : "$2,082.79", description : "Available Balance"},
        {title : "Argent Bank Savings (x6712)", amount : "$10,928.42", description : "Available Balance"},
        {title : "Argent Bank Credit Card (x8349)", amount : "$184.30", description : "Current Balance"}
    ]
    return (
        <React.Fragment >
            <UserHeader />
            <h2 className="sr-only">Accounts</h2>
            {data.map((element, index) => {
                return <UserAccount key={index} title={element.title} amount={element.amount} description={element.description} />
            })}
        </React.Fragment>
    )
}

export default UserDiv;