import React, {useState} from 'react'

const User = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    };

    const formStyle = {
        display : "flex",
        flexDirection : "column",
        maxWidth : "500px"
    };
    
    return (
        <div>
            <form onSubmit = {createUser} style= {formStyle}>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} placeholder="First Name"/>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} placeholder="Last Name"/>
                <input type="email" onChange={ (e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} placeholder="Password"/>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                <input type="submit" value="Create User"/>
            </form>
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Confirmation Password</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{confirmPassword}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User
