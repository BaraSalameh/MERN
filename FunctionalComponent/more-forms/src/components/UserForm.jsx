import React, {useState} from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                    <p>
                        {
                            firstName.length === 0 ? "" :
                                firstName.length >= 2 ? "" : "First Name should be at least 2 characters"
                        }
                    </p>
                </div>
                <div>
                    <input type="text" onChange={(e) => setLasttName(e.target.value)} placeholder="Last Name"/>
                    <p>
                        {
                            lastName.length === 0 ? "" :
                                lastName.length >= 2 ? "" : "The Last Name should be at least 2 characters"
                        }
                    </p>
                </div>
                <div>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <p>
                        {
                            email.length === 0 ? "" :
                                email.length >= 5 ? "" : "The Email should be at least 5 characters"
                        }
                    </p>
                </div>
                <div>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    <p>
                        {
                            password.length === 0 ? "" :
                                password.length >= 8 ? "" : "The Password should be at least 8 characters"
                        }
                    </p>
                </div>
                <div>
                    <input type="password" onChange={(e) => setConfirmationPassword(e.target.value)} placeholder="Confirmation Password"/>
                    <p>
                        {
                            confirmationPassword.length === 0 ? "" :
                                confirmationPassword.length >= 8 ? "" : "The Confirmation Password should be at least 8 characters"
                        }
                    </p>
                    <p>
                        {
                            confirmationPassword.length === 0 ? "" :
                                password === confirmationPassword ? "" : "Both password and confirmation should match"
                        }
                    </p>
                </div>
                <div>
                    <input type="submit" value="Create User"/>
                </div>
            </form>
        </div>
    )
}

export default UserForm
